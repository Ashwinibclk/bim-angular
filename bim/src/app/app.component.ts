import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, BIMProject,comments} from "./API.service";
import { Subscription } from "rxjs";
import { Router,NavigationStart } from "@angular/router";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {API} from 'aws-amplify';
import { stringify } from "querystring";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  response:any;
  res1:any;
  res2:Array<any>=[];
  j:any;
  i:any;
  title = "amplify-angular-app";
  public tbss:Array<BIMProject>=[];
  count:any;
  showapp:any;
  show:boolean=false;
  logcred:boolean=false;
  public tbs: Array<BIMProject> =[];
  user: CognitoUserInterface | undefined;
  authState: any;
  public tbs1: Array<comments> =[];
  /* declare restaurants variable */
  public createFormtb1: any;
  
  

  constructor(private api: APIService, private fb: FormBuilder, private ref: ChangeDetectorRef, private router:Router, private http:HttpClient) {
    this.createFormtb1=FormBuilder;
    this.createFormtb1= this.fb.group({
      comments: ["", Validators.required],
      
    });
    this.showapp=Boolean;
router.events.forEach((event)=>{
  if(event instanceof NavigationStart){
    this.showapp = event.url !=="/tableaulogin" && event.url !=="/quicksightlogin" && event.url !=="/sign-up" && event.url !=="/department" && event.url !=="/login" && event.url !=="/datasets" && event.url !=="/tableau" && event.url !=="/quicksight"
  }
})
    
  }
  private subscription: Subscription | null = null;
   ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListBIMProjects().then((event) => {
      this.tbs = event.items as BIMProject[];

    this.res1=this.getData1();
    console.log(this.res1);  
      
    

      
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

 /*   this.http.post<Article>(' https://toos22aleg.execute-api.us-east-2.amazonaws.com/bim/tableaudiscovery/', { title: 'Angular POST Request Example' }).subscribe(data => {this.res1=data;});
     console.log(this.res1);
  
  
  interface Article {
    "username": "ashwini.s155ashm@gmail.com",
    "password": "Abc7000*",
    "sitename": "bimvm",
    "siteurl": "https://prod-uk-a.online.tableau.com/"
}*/

  }
  
showm(){
  this.logcred=true;
  
}
  
method(){
  this.logcred=false;
  this.router.navigate(["\sign-up"]);
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
  
async  getData() { 
    const apiName = 'apiad1402f8';
    const path = '/items';
    const myInit = { // OPTIONAL
      headers: {}, // OPTIONAL
    };
    
 this.response=await API.get(apiName,path,myInit).then(result=>{console.log(result)})
    return this.response;
  }
  
  async  getData1() { 
    const apiName = 'apiad1402f8';
    const path = '/tableaudiscovery';
    const myInit = { // OPTIONAL
      headers: {},
      body: {"username": "ashwini.s155ashm@gmail.com",
      "password": "Abc7000*",
      "sitename": "bimvm",
      "siteurl": "https://prod-uk-a.online.tableau.com/"}
    };
    
    
 this.response=await API.post(apiName,path,myInit).then(result=>{this.res2=result.body; console.log(this.res2); return this.res2;})
 
 console.log(this.response);
  }
  
}