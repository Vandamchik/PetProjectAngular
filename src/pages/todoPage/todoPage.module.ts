import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoPageComponent } from "src/pages/todoPage/todoPage.component";

const routes: Routes = [
  {
    path: 'todos',
    component: TodoPageComponent,
  }
];
@NgModule({
  declarations: [TodoPageComponent],
  imports: [RouterModule.forChild(routes)]
})
export class TodoPageModule {}
