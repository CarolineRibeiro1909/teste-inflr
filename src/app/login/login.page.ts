import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  username: string;
  password: string;
  user_name: '';
  

  constructor(public api: ApiService, public user: UserService) { }

  login() {
    let dados = {
      "username": this.username,
      "password": this.password
    }
    this.api.loginApp(dados).then((result) => {
      this.user.setUsername(result.username);
    })
    this.user.setUsername('');

  }

}
