import {Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
  import {FormBuilder, FormGroup, Validators} from "@angular/forms";
  import {APIService, dataset, datasources} from "../API.service";
  import { Subscription } from "rxjs";
  import {Router} from '@angular/router';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})


export class DatasetComponent implements OnInit {
  
  
  showform: boolean=true;
  showmodal: boolean =false;
    public createFormd: any;
    public createFormds: any;
    public deps: Array<dataset> =[];
    public ds:Array<datasources> =[];
    constructor(private api: APIService, private fb: FormBuilder, private router: Router) { this.createFormd=FormBuilder;
      this.createFormd= this.fb.group({
        datasetid: ["", Validators.required],
        name: ["", Validators.required],
        
      });

      this.createFormds=FormBuilder;
      this.createFormds=this.fb.group({
        dsid:["",Validators.required],
        name:["",Validators.required],
        databaseserver:["",Validators.required],
        databasename:["",Validators.required],
        username:["",Validators.required],
        password:["",Validators.required],
        port:["",Validators.required],
        datasetid:["",Validators.required],

      })
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

    public onCreateds(todo: any) {
      this.api
        .CreateDatasources(todo)
        .then((event) => {
          console.log("item created!");
          this.createFormds.reset();
        })
        .catch((e) => {
          console.log("error creating...", e);
        });
        
    }
    
    onselect(event:Event){
        this.showform=false;
        this.showmodal=true;
        this.onCreated(this.createFormd.value);
    }

    showmodel(){
      this.showmodal=false;
      this.showform=true;
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
  
 


