import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  env = environment
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
}
