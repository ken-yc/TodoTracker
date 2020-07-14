import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'viewTodos', component: TodoListComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
