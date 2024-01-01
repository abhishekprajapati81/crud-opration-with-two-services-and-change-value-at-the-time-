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

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${id}`);
  }

  addNewTodos(addnewdata: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, addnewdata);
  }

  updateTodo(id: number, todochange: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.url}/${id}`, todochange);
  }
}
