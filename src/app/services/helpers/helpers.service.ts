import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  private _title: String =  'Ventas aplication'
  constructor() { }

  get title():String 
  {
    return this._title;
  }

  set title(title: String) {
    this._title = title;
  }
}
