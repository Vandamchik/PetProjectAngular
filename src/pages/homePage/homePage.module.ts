import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "src/pages/homePage/homePage.component";


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [RouterModule.forChild(routes)]
})
export class HomePageModule {

}
