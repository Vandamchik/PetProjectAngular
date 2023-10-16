import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoPageComponent } from "src/pages/todoPage/todoPage.component";
import { TodosHeaderComponent } from "src/components/todos/todosHeader/todosHeader.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: 'todos',
    component: TodoPageComponent,
  }
];
@NgModule({
  declarations: [TodoPageComponent, TodosHeaderComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TodoPageModule {}
