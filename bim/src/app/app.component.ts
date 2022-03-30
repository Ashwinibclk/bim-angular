import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, Tableaulogin} from "./API.service";
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
  public createForm: FormGroup;
  public createFormtb: any;
  showapp:any;


  user: CognitoUserInterface | undefined;
  authState: any;
  
  /* declare restaurants variable */
  
  public tbs: Array<Tableaulogin> =[];

  constructor(private api: APIService, private fb: FormBuilder, private ref: ChangeDetectorRef, private router:Router) {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      city: ["", Validators.required],
    });
    this.showapp=Boolean;
router.events.forEach((event)=>{
  if(event instanceof NavigationStart){
    this.showapp = event.url !=="/tableaulogin" && event.url !=="/quicksightlogin" && event.url !=="/customer" && event.url !=="/department" && event.url !=="/bimlogin"
  }
})
    this.createFormtb=FormBuilder;
    this.createFormtb= this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      sitename: ["", Validators.required],
    });
  }
  private subscription: Subscription | null = null;
  async ngOnInit() {
    /* fetch restaurants when app loads */
    

    this.api.ListTableaulogins().then((event) => {
      this.tbs = event.items as Tableaulogin[];
    });
    this.subscription = <Subscription>(
      this.api.OnCreateTableauloginListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb;
        this.tbs = [newtb, ...this.tbs];
      })
    );
    onAuthUIStateChange((authState, authData) => {
      this.authState=AuthState;
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }
  

  
  public onCreatetb(todo: any) {
    this.api
      .CreateTableaulogin(todo)
      .then((event) => {
        console.log("item created!");
        this.createFormtb.reset();
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