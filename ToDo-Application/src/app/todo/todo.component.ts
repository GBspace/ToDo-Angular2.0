import { Component} from '@angular/core';
import { Item } from './Model/Item';


@Component({
      selector: 'todo-app',
    templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
    name : string;
    Urgency: string;
   
//    listItems : Array<Item> = [];
    listItems = [];

    constructor(){
        this.name = "";
        this.listItems = [];
    }
   

    
   addItem(itemName : string, priority : string){
       console.log(itemName);
       this.listItems.push(itemName);
       console.log(priority);
       this.name = "";
   } 
  
    
}