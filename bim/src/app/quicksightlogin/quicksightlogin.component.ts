import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, Quicksightlogin} from "../API.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-quicksightlogin',
  templateUrl: './quicksightlogin.component.html',
  styleUrls: ['./quicksightlogin.component.css']
})
export class QuicksightloginComponent implements OnInit {
  public createFormqk: any;
  public qks: Array<Quicksightlogin> =[];
  constructor(private api: APIService, private fb: FormBuilder) {this.createFormqk=FormBuilder;
    this.createFormqk= this.fb.group({
      awsaccountId: ["", Validators.required],
      
    });
  }
  private subscription: Subscription | null = null; 

  async ngOnInit() {
   
  }
  
  public onCreateqk(todo: any) {
    this.api
      .CreateQuicksightlogin(todo)
      .then((event) => {
        console.log("item created!");
        this.createFormqk.reset();
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
