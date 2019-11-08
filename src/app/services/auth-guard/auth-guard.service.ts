import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router, public userService: UserService) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canDeactivate(): boolean {
    console.log('this.auth.isAuthenticated()',this.auth.isAuthenticated())
    if (!this.auth.isAuthenticated()) {
      if(this.userService.rolUser == 'Admin') {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['carrito`']);
      }
      return false;
    }
    return true;
  }

  redirectByRol(rol) {
    if(rol == 'Admin') {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['carrito']);
    }
  }
}
