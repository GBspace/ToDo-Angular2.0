import { Component} from '@angular/core';


@Component({
      selector: 'todo-app',
    templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
    name : string;
    listItems = [];
    constructor(){
        this.name = "";
        this.listItems = [];
    }
   

    
   addItem(itemName : string){
       console.log(itemName);
       this.listItems.push(itemName);
    this.name = "";
   } 
  
    
}