import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
  import {FormBuilder, FormGroup, Validators} from "@angular/forms";
  import {APIService, dataset} from "../API.service";
  import { Subscription } from "rxjs";
  import {Router} from '@angular/router';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  
  
  
  
    public createFormd: any;
    public deps: Array<dataset> =[];
    constructor(private api: APIService, private fb: FormBuilder, private router: Router) { this.createFormd=FormBuilder;
      this.createFormd= this.fb.group({
        datasetid: ["", Validators.required],
        name: ["", Validators.required],
        
      });
    }
    private subscription: Subscription | null = null; 
  
    async ngOnInit() {
      this.api.ListDatasets().then((event) => {
        this.deps = event.items as dataset[];
      });
    
      
      this.subscription = <Subscription>(
        this.api.OnCreateDatasetListener.subscribe((event: any) => {
          const newtb = event.value.data.onCreated;
          this.deps = [newtb, ...this.deps];
        })
      );
    }
    
    public onCreated(todo: any) {
      this.api
        .CreateDataset(todo)
        .then((event) => {
          console.log("item created!");
          this.createFormd.reset();
        })
        .catch((e) => {
          console.log("error creating...", e);
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
  
 


