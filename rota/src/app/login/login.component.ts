import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    console.log(this.usuario);
    // this.authService.fazerLogin(this.usuario);

    this.authService.fazerLogin(this.usuario);
  }

}
