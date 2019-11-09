import { Component } from '@angular/core';
import { HelpersService } from './services/helpers/helpers.service';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ventas-project';

  constructor(
    public helpersService: HelpersService, 
    public authService: AuthService,
    public router: Router,
    public userService: UserService) {

  }

  toggleMenu() {
    this.helpersService.openedSidebar = !this.helpersService.openedSidebar;
  }

  logout() {
    this.authService.destoyCredentials();
    this.router.navigate(['login']);
  }
}
