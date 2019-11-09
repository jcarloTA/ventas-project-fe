import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/shared/models/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  model :Producto = {
    costo: null,
    descripcion: '',
    nombre: '',
    imagen: ''
  }
  constructor(
    public helpersService: HelpersService,
    public productosService: ProductosService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.helpersService.title = Titles.crearProducto;
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.model = this.productosService.getProductoById(id);
    }
  }

  getFile(event) {
    let files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(files[0]);
  }

  _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.model.imagen = "data:image/jpg;base64," + btoa(binaryString);  // Converting binary string data.
  }

  saveAnuncio() {
    this.productosService.create(this.model).subscribe((res) => {
      console.log('create',res);
      this.router.navigate(['admin/productos']);
    })
  }

}
