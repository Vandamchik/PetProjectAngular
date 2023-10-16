import { Component } from "@angular/core";


@Component({
  selector: 'app-todos-header',
  templateUrl: 'todosHeader.component.html',
  styleUrls: ['todosHeader.component.scss']
})
export class TodosHeaderComponent {
  todoInput = "";

  addToDo(): void {
    console.log(this.todoInput)
  }
}
