import { Component, OnInit } from '@angular/core';
import { Model } from '../../services/model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  model = new Model();

  constructor() { 
    
  }

  ngOnInit() {
  }

  getName(){
    return this.model.user;
  }

  getTodoItems(){
    return this.model.items;
  }
}
