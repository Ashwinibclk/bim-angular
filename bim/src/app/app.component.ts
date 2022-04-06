import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, BIMProject,comments} from "./API.service";
import { Subscription } from "rxjs";
import { Router,NavigationStart } from "@angular/router";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "amplify-angular-app";
  
  showapp:any;
  show:boolean=false;
  logcred:boolean=false;
  public tbs: Array<BIMProject> =[];
  user: CognitoUserInterface | undefined;
  authState: any;
  public tbs1: Array<comments> =[];
  /* declare restaurants variable */
  public createFormtb1: any;
  

  constructor(private api: APIService, private fb: FormBuilder, private ref: ChangeDetectorRef, private router:Router) {
    this.createFormtb1=FormBuilder;
    this.createFormtb1= this.fb.group({
      comments: ["", Validators.required],
      
    });
    this.showapp=Boolean;
router.events.forEach((event)=>{
  if(event instanceof NavigationStart){
    this.showapp = event.url !=="/tableaulogin" && event.url !=="/quicksightlogin" && event.url !=="/customer" && event.url !=="/department" && event.url !=="/bimlogin" && event.url !=="/datasets"
  }
})
    
  }
  private subscription: Subscription | null = null;
   ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListBIMProjects().then((event) => {
      this.tbs = event.items as BIMProject[];
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateBIMProjectListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb;
        this.tbs = [newtb, ...this.tbs];
      })
    );
    this.api.ListComments().then((event) => {
      this.tbs1 = event.items as comments[];
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateCommentsListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb1;
        this.tbs1 = [newtb, ...this.tbs1];
      })
    );
    
    onAuthUIStateChange((authState, authData) => {
      this.authState=AuthState;
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }
  
showm(){
  this.logcred=true;
  
}
  
method(){
  this.logcred=false;
  this.router.navigate(["\customer"]);
}

public onCreatetb1(todo: any) {
  this.api
    .CreateComments(todo)
    .then((event) => {
      console.log("item created!");
      this.createFormtb1.reset();
      this.ngOnInit();
    })
    .catch((e) => {
      console.log("error creating restaurant...", e);
    });
    
}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
    return onAuthUIStateChange;
  }
  
}