import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/IUser';
import User from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserApiClientService {

  private usersUrl = 'api/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }

  getUserById(userId: string): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, {
      params: {
        id: userId
      }
    });
  }
}
