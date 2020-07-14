import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  

  constructor(private http: HttpClient) { }

  getTodos(): Observable<string[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<string[]>('http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos', httpHead);
  }

  postTodos(form): Observable<string> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<string>('http://ec2-user@ec2-54-241-135-19.us-west-1.compute.amazonaws.com:8080/todos', form,httpHead);
  }
}
