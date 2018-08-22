import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  public mostrarMenuEmitter = new EventEmitter();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;

      this.router.navigate(['/']);

      this.mostrarMenuEmitter.emit('logado');

    }

  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
