import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AsyncPipe, NgForOf } from "@angular/common";

import { TodoPageComponent } from "src/pages/todoPage/todoPage.component";
import { TodoLayoutComponent } from "src/components/todos/todoLayout/todoLayout.component";
import { TodoHeaderComponent } from "src/components/todos/todoHeader/todoHeader.component";
import { TodoListComponent } from "src/components/todos/todoList/todoList.component";

const routes: Routes = [
  {
    path: 'todo',
    component: TodoPageComponent,
  }
];
@NgModule({
  declarations: [
    TodoPageComponent,
    TodoLayoutComponent,
    TodoHeaderComponent,
    TodoListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    AsyncPipe,
    NgForOf,
  ]
})
export class TodoPageModule {}
