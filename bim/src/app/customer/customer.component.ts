import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
import {APIService,  Customer} from "../API.service";
import { Subscription } from "rxjs";
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public createFormtb: any;
  public tbs: Array<Customer> =[];
  constructor(private api: APIService, private fb: FormBuilder, private router: Router) { 
    this.createFormtb=FormBuilder;
    this.createFormtb= this.fb.group({
      CustomerId: ["", Validators.required],
      name: ["", Validators.required],
      Did: ["", Validators.required],
    });
  }
  private subscription: Subscription | null = null;
  async ngOnInit() {
    this.api.ListCustomers().then((event) => {
      this.tbs = event.items as Customer[];
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateCustomerListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb;
        this.tbs = [newtb, ...this.tbs];
      })
    );
  }
  
  public onCreatetb(todo: any) {
    this.api
      .CreateCustomer(todo)
      .then((event) => {
        console.log("item created!");
        this.createFormtb.reset();
      })
      .catch((e) => {
        console.log("error creating restaurant...", e);
      });
      this.router.navigate(["/department"]);
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
