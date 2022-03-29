import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, Department} from "../API.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public createFormd: any;
  public deps: Array<Department> =[];
  constructor(private api: APIService, private fb: FormBuilder) { this.createFormd=FormBuilder;
    this.createFormd= this.fb.group({
      Dname: ["", Validators.required],
      Did: ["", Validators.required],
      CustomerId:["", Validators.required],
    });
  }
  private subscription: Subscription | null = null; 

  async ngOnInit() {
    this.api.ListDepartments().then((event) => {
      this.deps = event.items as Department[];
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateDepartmentListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreateqk;
        this.deps = [newtb, ...this.deps];
      })
    );
  }
  
  public onCreated(todo: any) {
    this.api
      .CreateDepartment(todo)
      .then((event) => {
        console.log("item created!");
        this.createFormd.reset();
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
