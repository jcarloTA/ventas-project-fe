import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  private _title: String =  'Ventas aplication'
  private _openedSidebar: Boolean = false;
  constructor() { }

  get title():String 
  {
    return this._title;
  }

  set title(title: String) {
    this._title = title;
  }

  get openedSidebar(): Boolean {
    return this._openedSidebar;
  }

  set openedSidebar(openedSidebar: Boolean) {
    this._openedSidebar = openedSidebar
  }
}
