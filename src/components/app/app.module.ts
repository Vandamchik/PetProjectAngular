import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/components/app/app-routing.module';
import { AppComponent } from 'src/components/app/app.component';
import { TodoPageModule } from "src/pages/todoPage/todoPage.module";
import { HomePageModule } from 'src/pages/homePage/homePage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoPageModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
