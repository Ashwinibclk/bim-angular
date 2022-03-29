import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService,BIMProject} from "../API.service";
import { Subscription } from "rxjs";
import { Router,NavigationStart } from "@angular/router";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-bimproject',
  templateUrl: './bimproject.component.html',
  styleUrls: ['./bimproject.component.css']
})
export class BIMProjectComponent implements OnInit {
  showapp:any;
  public createFormbim: any;
  public tbs: Array<BIMProject> =[];

  user: CognitoUserInterface | undefined;
  authState: any;
  

  constructor(private api: APIService, private fb: FormBuilder) { 
    this.createFormbim=FormBuilder;
    this.createFormbim= this.fb.group({
    Did: ["", Validators.required],
      name: ["", Validators.required],
      source: ["", Validators.required],
      destination: ["", Validators.required],
    });
  }
  private subscription: Subscription | null = null;
  async ngOnInit() {
    this.api.ListBIMProjects().then((event) => {
      this.tbs = event.items as BIMProject[];
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateBIMProjectListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatebim;
        this.tbs = [newtb, ...this.tbs];
      })
    );
  }
  public onCreatebim(todo: any) {
    this.api
      .CreateBIMProject(todo)
      .then((event) => {
        console.log("item created!");
        this.createFormbim.reset();
      })
      .catch((e) => {
        console.log("error creating restaurant...", e);
      });
  }
  
  /*public onDelete(username:any){
    this.api.DeleteTableaulogin(username).then((event)=>{
      console.log("item deleted!")
    });
  }
  
  public onUpdate(id:any){
    this.api.UpdateTableaulogin(id).then((event)=>{
      console.log("item updated!");
    })
  }
  */
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
    
  }
  
 
}
