import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {APIService, Todo} from "./API.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "amplify-angular-app";
  public createForm: FormGroup;

  /* declare restaurants variable */
  public todos: Array<Todo> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      city: ["", Validators.required],
    });
  }
  private subscription: Subscription | null = null;
  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListTodos().then((event) => {
      this.todos = event.items as Todo[];
    });
    this.subscription = <Subscription>(
      this.api.OnCreateTodoListener.subscribe((event: any) => {
        const newRestaurant = event.value.data.onCreateRestaurant;
        this.todos = [newRestaurant, ...this.todos];
      })
    );
  }
  

  public onCreate(todo: any) {
    this.api
      .CreateTodo(todo)
      .then((event) => {
        console.log("item created!");
        this.createForm.reset();
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
  }
  
}