import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl} from "@angular/forms";
import {APIService,  BIMProject} from "../API.service";
import { Subscription } from "rxjs";
import { BIPlatform } from "../API.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-bimproject',
  templateUrl: './bimproject.component.html',
  styleUrls: ['./bimproject.component.css']
})



export class BimprojectComponent implements OnInit {
  public createFormtb: any;
  public tbs: Array<BIMProject> =[];
  
  
  constructor(private api: APIService, private fb: FormBuilder, private router: Router) {
    this.createFormtb=FormBuilder;
    this.createFormtb= this.fb.group({
      Pname: ["", Validators.required],
      cname:["",Validators.required],
      Did: ["", Validators.required],
      source: ["", Validators.required],
      destination:["",Validators.required],
      migrationid:["",Validators.required],
    });
   }
   private subscription: Subscription | null = null;
   async ngOnInit() {
    this.api.ListBIMProjects().then((event) => {
      this.tbs = event.items as BIMProject[];
    });
  
    
    this.subscription = <Subscription>(
      this.api.OnCreateBIMProjectListener.subscribe((event: any) => {
        const newtb = event.value.data.onCreatetb;
        this.tbs = [newtb, ...this.tbs];
      })
    );
  }
  
  public onCreatetb(todo: any) {
    this.api
      .CreateBIMProject(todo)
      .then((event) => {
        console.log("item created!");
        
        this.createFormtb.get('destination').value;
        this.createFormtb.reset();
      })
      .catch((e) => {
        console.log("error creating restaurant...", e);
      });
      this.router.navigate(["/tableaulogin"]);
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
