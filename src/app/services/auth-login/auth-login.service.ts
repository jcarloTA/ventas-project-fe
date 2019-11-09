import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(public auth: AuthService, public router: Router, public userService: UserService) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      if(this.userService.rolUser == 'admin') {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['carrito']);
      }
      return false;
    }
    return true;
  }

}
