import { Injectable } from '@angular/core';
import User from '../model/User';
import { UserApiClientService } from './user-api-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private _isLoggedIn: boolean = false;

  constructor(private userService: UserApiClientService) { }

  async doLoginAsync(userId: string, password: string): Promise<boolean> {
    const users: User[] = await this.userService.getUserById(userId).toPromise();
    this._isLoggedIn = users?.[0]?.password === password;
    return this._isLoggedIn;
  }

  public get isLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
