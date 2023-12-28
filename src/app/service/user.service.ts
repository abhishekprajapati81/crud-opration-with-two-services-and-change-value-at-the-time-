import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modal/user.modal';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/User';

  getuser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  deleteUsers(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }

  addNewUsers(addUserData: User): Observable<User> {
    return this.http.post<User>(this.url, addUserData);
  }

  updateUsers(id: number, changes: User): Observable<User> {
    return this.http.patch<User>(`${this.url}/${id}`, changes);
  }
}
