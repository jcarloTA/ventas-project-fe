import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Vendedor } from 'src/app/shared/models/vendedor';
import { VendedoresService } from 'src/app/services/vendedores/vendedores.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.scss']
})
export class PerfilVendedorComponent implements OnInit {

  model: Vendedor
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
    public userService: UserService
    ) {
    this.helpersService.title = Titles.perfilVendedor;
  }

  ngOnInit() {
    this.model = this.userService.vendedor;
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
        alert('Perfil Actualizado!')
      })
    } 
  }
}
