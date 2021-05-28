import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<Object> {
    return this.httpClient.get<Object>(`${this.baseURL}`);
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseURL}`, user);
  }

  getUserById(userId: string): Observable<Object> {
    return this.httpClient.get<Object>(`${this.baseURL}/${userId}`);
  }

  updateUserById(userId: string, user: User): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseURL}/${userId}`, user);
  }

  deleteUserById(userId: string): Observable<Object> {
    const params = new HttpParams()
      .set('delete-type', 'hard')
      .set('user-id', userId);
    // return this.httpClient.delete<Object>(
    //   `${this.baseURL}?delete-type=hard&user-id=${userId}`
    // );

    return this.httpClient.delete<Object>(`${this.baseURL}`, { params });
  }
}
