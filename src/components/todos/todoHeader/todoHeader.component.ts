import { Component } from "@angular/core";

import { TodosService } from 'src/pages/todoPage/todoPage.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: 'todoHeader.component.html',
  styleUrls: ['todoHeader.component.scss']
})
export class TodoHeaderComponent {
  todoInput: string = "";

  constructor(private todoService: TodosService) {}

  addTodo(): void {
    this.todoService.addToTodo(this.todoInput);
    this.todoInput = '';
  }
}
