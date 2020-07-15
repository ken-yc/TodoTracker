import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl('')
  });

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodos(todoSub: FormGroup): void {
    //console.log('todoSub ' + todoSub.value['title']);
    if(todoSub.value['title']) {
      const form = JSON.stringify(todoSub.value);
      this.todoService.postTodos(form).subscribe(
        rsponse => {
          //console.log("success");
          this.router.navigate(['/todos']);
        }
      );
    }
  }
}
