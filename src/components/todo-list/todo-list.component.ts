import { Component } from "@angular/core";
import { ToDoTask, ToDoTaskComponent } from "../todo-task/todo-task.component";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
    imports: [ToDoTaskComponent],
})
export class ToDoListComponent {
    public tasksList: ToDoTask[] = [];

    public createTask(title: string, inputElem: HTMLInputElement) {
        if (title === "") {
            return;
        }
        
        inputElem.value = "";
        this.tasksList.unshift({ id: Date.now(), title, isCompleted: false });
    }

    public deleteTask(id: number) {
        this.tasksList = this.tasksList.filter((task) => task.id !== id);
    }

    public editTask(task: ToDoTask) {
        this.tasksList = this.tasksList.map((t) => t.id !== task.id ? t : task);
    }
}
