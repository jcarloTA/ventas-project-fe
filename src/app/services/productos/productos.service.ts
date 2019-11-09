import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Producto } from 'src/app/shared/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  env = environment
  private _productos: Producto[]
  constructor(
  private  httpClient: HttpClient
  ) { }

  getAll() {
    return this.httpClient.get(`${this.env.apiUrl}/productos/`)
  }

  create(body) {
    return this.httpClient.post(`${this.env.apiUrl}/productos/`, body)
  }
  
  update(body) {
    return this.httpClient.post(`${this.env.apiUrl}/productos/`, body)
  }
  
  delete(id) {
    return this.httpClient.delete(`${this.env.apiUrl}/productos/${id}`,)
  }

  get productos(): Producto[] {
    return this._productos
  }

  set productos(productos: Producto[]) {
    this._productos = productos;
  }

  getProductoById(id) {
    return this.productos.filter( e => e.id == id)[0]
  }
}
