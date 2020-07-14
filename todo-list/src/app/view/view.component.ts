import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from '../ITodo';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  deleteTodo(): void {
    const observable = this.todoService.deleteTodo(this.id);
    observable.subscribe(data => {
      this.router.navigate(['/todos']);
    });
  }

  markComplete(): void {
    const observable = this.todoService.completeTodo(this.id);
    observable.subscribe(data => {
      this.router.navigate(['/todos']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = 'id';
      this.id = params[id];
    });

    const observable = this.todoService.getTodo(this.id);
    observable.subscribe(data => {
      this.todo = data;
    });
  }

}
