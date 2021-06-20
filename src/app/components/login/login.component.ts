import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/IUser';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserApiClientService } from 'src/app/services/user-api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public users: IUser[] = [];

  public hasError: boolean = false;

  public userId: string = "";
  public password: string = "";

  constructor(
    private userService: UserApiClientService,
    private loginService: LoginServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  public login() {
    this.loginService
      .doLoginAsync(this.userId, this.password)
      .then(isSuccess => {
        if (isSuccess) {
          this.router.navigateByUrl("/game");
        } else {
          this.hasError = true;
        }
      });
  }

  getUserDisplayName(user: IUser){
    return `${user.id}. ${user.familyName.toUpperCase()}, ${user.givenName.toUpperCase()}`;
  }

  selectUser(user: IUser) {
    this.userId = user.id;
    this.password = "";
  }
}
