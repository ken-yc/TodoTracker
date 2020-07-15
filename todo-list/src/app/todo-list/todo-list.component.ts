import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../ITodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [];
  filteredTodoList: Todo[] = [];

  constructor(private todoService: TodoService) { }

  // Filter fields
  attrListFilter = '';

  get listFilter() {
      return this.attrListFilter;
  }

  set listFilter(temp: string) {
      this.attrListFilter = temp;
      this.filteredTodoList = this.attrListFilter ?
          this.performFilter(this.attrListFilter) : this.todoList;
  }

  performFilter(filterBy: string):Todo[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.todoList.filter(function(todo:Todo) {
          return (todo.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
      });
  }

  ngOnInit(): void {
    const observable = this.todoService.getTodos();
    observable.subscribe(data => {
      //console.log(data);
      this.todoList = data;
      this.filteredTodoList = this.todoList;
    });
  }

}
