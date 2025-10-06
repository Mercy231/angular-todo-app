import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

export interface ToDoTask {
    id: number;
    title: string;
    isCompleted: boolean;
} 

@Component({
    selector: "todo-task",
    templateUrl: "./todo-task.component.html",
    styleUrl: "./todo-task.component.scss",
    imports: [FormsModule]
})
export class ToDoTaskComponent {
    @Input({ required: true })
    public task!: ToDoTask;

    public isEditing: boolean = false;
    public draftTitle: string = "";

    public onEditClick(): void {
        this.isEditing = true;
        this.draftTitle = this.task.title;
    }

    public onCancelClick(): void {
        this.isEditing = false;
        this.draftTitle = this.task.title;
    }

    @Output() taskSaved = new EventEmitter<ToDoTask>();

    public onSaveClick(): void {   
        this.isEditing = false;
        if (this.task.title !== this.draftTitle) {
            console.log("works");
            
            this.taskSaved.emit({ ...this.task, title: this.draftTitle });
        }
    }

    @Output() taskDeleted = new EventEmitter<number>();

    public onDelete() {
        this.taskDeleted.emit(this.task.id);
    }
}