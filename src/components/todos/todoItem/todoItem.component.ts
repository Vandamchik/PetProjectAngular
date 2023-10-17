import { Component, Input } from "@angular/core";

import { ITodo } from "src/pages/todoPage/todoPage.types";

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todoItem.component.html',
  styleUrls: ['todoItem.component.scss']
})
export class TodoItemComponent {
  @Input() todoProps: ITodo

  constructor() {}
}
