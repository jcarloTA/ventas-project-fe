import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Vendedor } from 'src/app/shared/models/vendedor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendedoresService } from 'src/app/services/vendedores/vendedores.service';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.scss']
})
export class CrearVendedorComponent implements OnInit {
  formVendedor;
  model: Vendedor = {
    apellido: '',
    contrasena: '',
    direccion: '',
    confirmarContrasena: '',
    estado: '',
    fechaNacimiento: '',
    nombre: '',
    telefonos: []
  }
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/;
  errors = {
    password: {
      msj: 'La contrasena debe tener 1 mayuscula, 1 minuscula y 1 numero',
      show: false
    },
    confirmPassword: {
      msj: 'La contrasenas deben ser iguales',
      show: false
    }
  }
  constructor(
    public helpersService: HelpersService,
    public vendedorService: VendedoresService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.helpersService.title = Titles.crearVendedor;
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.model = this.vendedorService.getVendedorById(id);
    }
  }

  agregarTelefono() {
    this.model.telefonos.push({numero: null})
  }
  validContrasena() {
    if(this.model.contrasena.match(this.regexPassword)) {
      return this.errors.password.show = false;
    }
    return this.errors.password.show = true;
  }
  validConfirmContrasena() {
    if(this.model.contrasena == this.model.confirmarContrasena) {
      return this.errors.confirmPassword.show = false;
    }
    return this.errors.confirmPassword.show = true;
  }

  saveVendedor() { 
    if(!this.errors.password.show && !  this.errors.confirmPassword.show) {
      this.vendedorService.create(this.model).subscribe((res) => {
        console.log('create',res);
        this.router.navigate(['admin/vendedores']);
      })
    } 
  }
}
