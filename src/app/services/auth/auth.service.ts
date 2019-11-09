import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private env = environment
    constructor(
    private  httpClient: HttpClient,
    private localStorageSevice: LocalStorageService,
    private userService: UserService
    ) { }

    login(body) {
      return this.httpClient.post(`${this.env.apiUrl}/auth/login`, body);
    }

    saveLocalCredentials(userLogin) {
      this.localStorageSevice.setItem(this.env.key_store, userLogin)
    }

    isAuthenticated(): boolean {
      if(this.userService.isLogged) {
        return true
      }
      const auth_storage = this.localStorageSevice.getItem(this.env.key_store)
      if(auth_storage) {
          this.userService.setAllCredentials(auth_storage.vendedor, auth_storage.isLogged, auth_storage.rol)
        return true;
      }
      
      return false;
    }

    destoyCredentials() {
      this.localStorageSevice.clearItems();
      this.userService.setAllCredentials(null, null, null);
    } 
}
