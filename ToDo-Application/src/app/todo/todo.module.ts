import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo.component';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [TodoComponent],
  providers: [],
  bootstrap: [TodoComponent]
}) 
export class TodoModule{
    
} 