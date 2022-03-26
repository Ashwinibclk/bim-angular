import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, Todo, Tableaulogin} from "../API.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-tableaulogin',
  templateUrl: './tableaulogin.component.html',
  styleUrls: ['./tableaulogin.component.css']
})
export class TableauloginComponent implements OnInit {
  public createFormtb: any;
  public tbs: Array<Tableaulogin> =[];
  constructor(private api: APIService, private fb: FormBuilder) { 
    this.createFormtb=FormBuilder;
    this.createFormtb= this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      sitename: ["", Validators.required],
    });
  }
  private subscription: Subscription | null = null;
  
 async ngOnInit() {
  this.api.ListTableaulogins().then((event) => {
    this.tbs = event.items as Tableaulogin[];
  });

  
  this.subscription = <Subscription>(
    this.api.OnCreateTableauloginListener.subscribe((event: any) => {
      const newtb = event.value.data.onCreatetb;
      this.tbs = [newtb, ...this.tbs];
    })
  );
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
