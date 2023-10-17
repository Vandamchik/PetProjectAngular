import { Component, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, map, Observable} from "rxjs";

import { ITodo, TTodoStatus } from 'src/pages/todoPage/todoPage.types';
import { TodosService } from "src/pages/todoPage/todoPage.service";


@Component({
  selector: 'app-todos-list',
  templateUrl: 'todoList.component.html',
  styleUrls: ['todoList.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  allTodos$: Observable<ITodo[]>;
  isNotEmpty: boolean | void;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.isNotEmpty$.subscribe(status => this.isNotEmpty = status);
    this.allTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filterTodos$,
    ).pipe(map(([todos, filter]: [ITodo[], TTodoStatus]) => {
      if(filter === 'active') {
        return todos.filter(todo => !todo.isCompleted)
      } else if (filter === 'completed') {
        return todos.filter(todo => todo.isCompleted)
      }
      return todos;
    }))
  }

  ngOnDestroy() {
    this.todosService.isNotEmpty$.unsubscribe();
  }
}
