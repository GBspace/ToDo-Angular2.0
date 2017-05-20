import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TodoModule } from './todo/todo.module';
//import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
//    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
