import { Injectable } from '@angular/core';
import { Vendedor } from 'src/app/shared/models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _vendedor: Vendedor;
  private _admin: { nombre? }
  private _isLogged: Boolean;
  private _rolUser: String;
  constructor() { }

  get vendedor():Vendedor {
    return this._vendedor
  }

  set vendedor(vendedor:Vendedor) {
    this._vendedor = vendedor;
  }

  get isLogged() : Boolean{
    return this._isLogged
  }

  set isLogged(isLogged: Boolean) {
    this._isLogged = isLogged
  }

  get rolUser():String {
    return this._rolUser
  }

  set rolUser(rolUser: String) {
    this._rolUser = rolUser
  }

  setAllCredentials(vendedor: Vendedor, isLogged: Boolean, rolUser) {
    this.vendedor = vendedor;
    this.isLogged = isLogged;
    this.rolUser = rolUser;
  }
}
