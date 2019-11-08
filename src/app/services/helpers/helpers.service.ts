import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  private _title: String =  'Ventas aplication'
  private _openedSidebar: Boolean = false;
  private _isLogged: Boolean = false;
  private _roleUser: String ; 

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

  get isLogged() : Boolean {
    return this._isLogged;
  }

  set isLogged(isLogged: Boolean) {
    this._isLogged = isLogged;
  }

  set roleUser(roleUser: String) {
    this._roleUser = roleUser;
  }

  get roleUser(): String {
    return this._roleUser;
  }
}
