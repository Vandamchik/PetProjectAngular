import { Component, OnDestroy, OnInit } from "@angular/core";

import { TodosService } from 'src/pages/todoPage/todoPage.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: 'todoHeader.component.html',
  styleUrls: ['todoHeader.component.scss']
})
export class TodoHeaderComponent implements OnInit, OnDestroy {
  todoInput: string = "";
  isNotEmpty: boolean;

  constructor(private todosService: TodosService) {
  }

  addTodo(): void {
    this.todosService.addToTodo(this.todoInput);
    this.todoInput = '';
  }

  ngOnInit() {
    this.todosService.isNotEmpty$.subscribe(data => this.isNotEmpty = data)
  }

  ngOnDestroy() {
    this.todosService.isNotEmpty$.unsubscribe()
  }
}
