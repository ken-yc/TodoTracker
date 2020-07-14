import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/add', component: AddComponent},
  { path: 'todos/edit/:id', component: EditComponent},
  { path: 'todos/:id', component: ViewComponent},
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
