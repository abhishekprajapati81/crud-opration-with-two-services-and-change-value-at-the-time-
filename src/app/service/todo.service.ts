import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../modal/todo.modal';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  url: string = ' http://localhost:3000/todo';

  getTask(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
}
