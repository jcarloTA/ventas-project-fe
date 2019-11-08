import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = {};
  errorLogin = false;
  constructor(
    public helpersService: HelpersService,
    public authService: AuthService,
    public userService: UserService,
    public router: Router,
    public authGuardService: AuthGuardService
  ) { 
    this.helpersService.title = Titles.login;
  }

  ngOnInit() {
  }

  login(model) {
    this.authService.login(model).subscribe((res:any) => {
      if (res.isLogged) {
        this.userService.setAllCredentials(null,res.isLogged,res.rol);
        this.authService.saveLocalCredentials(res);
        this.authGuardService.redirectByRol(res.rol);
      }
    }, err => {
      console.log('err', err)
      this.errorLogin = true
    })
  }
}
