import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Vendedor } from 'src/app/shared/models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {
  env = environment
  private _vendedores: Vendedor[];
  constructor(
  private  httpClient: HttpClient
  ) { }

  getAll() {
    return this.httpClient.get(`${this.env.apiUrl}/vendedores/`)
  }

  create(body: Vendedor) {
    return this.httpClient.post(`${this.env.apiUrl}/vendedores/`, body)
  }
  
  update(body: Vendedor) {
    return this.httpClient.post(`${this.env.apiUrl}/vendedores/`, body)
  }
  
  delete(id: Number) {
    return this.httpClient.delete(`${this.env.apiUrl}/vendedores/${id}`,)
  }

  get vendedores(): Vendedor[] {
    return this._vendedores
  }

  set vendedores(vendedores: Vendedor[]) {
    this._vendedores = vendedores;
  }

  getVendedorById(id) {
    return this.vendedores.filter( e => e.id == id)[0]
  }
}
