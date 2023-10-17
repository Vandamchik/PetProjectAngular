import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { ITodo, TTodoStatus } from 'src/pages/todoPage/todoPage.types';

@Injectable({providedIn: 'root'})
export class TodosService {
  todos$ = new BehaviorSubject<ITodo[]>([]);
  filterTodos$ = new BehaviorSubject<TTodoStatus>('all');
  isNotEmpty$ = new Subject<boolean>();

  constructor() {}

  addToTodo(text: string): void {
    const newTodo: ITodo = {
      text,
      isCompleted: false,
      id: Date.now().toString()
    };
    const updateTodos:ITodo[] = [...this.todos$.getValue(), newTodo];
    this.isNotEmpty$.next(true);
    this.todos$.next(updateTodos);
  }
}
