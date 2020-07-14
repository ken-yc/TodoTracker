import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<Todo[]>('http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos', httpHead);
  }

  getTodo(id: number): Observable<Todo> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<Todo>(`http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos/${id}`, httpHead);
  }

  postTodos(form): Observable<string> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<string>('http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos', form, httpHead);
  }

  editTodo(form): Observable<string> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<string>('http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos', form, httpHead);
  }

  deleteTodo(id: number): Observable<string> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.delete<string>(`http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos/${id}`, httpHead);
  }

  completeTodo(id: number): Observable<string> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.patch<string>(`http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos/${id}`, httpHead);
  }
}
