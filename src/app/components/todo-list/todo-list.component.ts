import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../services/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  user;
  items;

  constructor() { 
    this.user = "Adam";
    this.items = [
      new TodoItem("Buy Flowers", false),
      new TodoItem("Get Shoes", true),
      new TodoItem("Call James", false)
    ];
  }

  ngOnInit() {
  }

  getName(){
    return this.user;
  }
}
