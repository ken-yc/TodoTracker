import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

import { TodoService } from '../services/todo.service';
import { Todo } from '../ITodo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  todo: Todo;

  editForm = new FormGroup({
    title: new FormControl(),
    id: new FormControl(),
    completed: new FormControl()
  });

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = 'id';
      this.id = params[id];
    });

    const observable = this.todoService.getTodo(this.id);
    observable.subscribe(data => {
      this.todo = data;
      this.editForm.get('title').setValue(data.title);
      this.editForm.get('id').setValue(data.id);
      this.editForm.get('completed').setValue(data.completed);
    });
  }

  editTodo(todoSub: FormGroup): void {
    const form = JSON.stringify(todoSub.value);
    this.todoService.editTodo(form).subscribe(
      rsponse => {
        //console.log("success");
        this.router.navigate(['/todos']);
      }
    );
  }

}
