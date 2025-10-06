import { Component, signal } from "@angular/core";
import { ToDoListComponent } from "../components/todo-list/todo-list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  imports: [ToDoListComponent]
})
export class App {
  protected readonly title = signal("angular-todo-app");
}
