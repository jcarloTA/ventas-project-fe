import { Component } from '@angular/core';
import { HelpersService } from './services/helpers/helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ventas-project';

  constructor(public helpersService: HelpersService) {

  }

  toggleMenu() {
    this.helpersService.openedSidebar = !this.helpersService.openedSidebar;
  }

  logout() {
    console.log('logout')
  }
}
