import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Pedido } from 'src/app/shared/models/pedido';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { UserService } from '../user/user.service';
import { Producto } from 'src/app/shared/models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  env = environment
  private _pedidos: Pedido[]
  private _pedido: Pedido;
  constructor(
    private httpClient: HttpClient,
    private LocalStorageService: LocalStorageService,
    private userServic: UserService
  ) { }

  getAllPedidos() {
    return this.httpClient.get(`${this.env.apiUrl}/pedidos/`)
  }

  createPedido(body) {
    return this.httpClient.post(`${this.env.apiUrl}/pedidos/`, body)
  }
  
  get pedido():Pedido {
    return this._pedido;
  }
  set pedido(pedido:Pedido) {
    this._pedido = pedido;
  }

  saveStoragePedido() {
    this.LocalStorageService.setItem('pedido', JSON.stringify(this.pedido))
  }

  loadStoragePedido(): Pedido {
    return this.LocalStorageService.getItem('pedido');
  }

  loadInitialPedido() {
    let storagePedido: any = this.loadStoragePedido();
    if(storagePedido) {
      this.pedido = storagePedido;
    } else {
      this.pedido = {
        nombre: "",
        fechaEntrega: "",
        montoTotal: 0,
        idVendedor: this.userServic.vendedor.id,
        detalles: []
      }
    }
  }

  addProducto(producto: Producto ){
    for(let detalle of this.pedido.detalles) {
      if(detalle.idProducto == producto.id) {
        detalle.cantidad = detalle.cantidad + 1;
        return;
      }
    }
    this.pedido.detalles.push({
      idProducto: producto.id,
      cantidad: 1,
      producto: producto
    })
  }
}
