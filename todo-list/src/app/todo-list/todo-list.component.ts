import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    const observable = this.todoService.getTodos();
    observable.subscribe(data => {
      console.log(data);
      this.todoList = data;
    });
  }

}
