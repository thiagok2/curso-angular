import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rota';

  mostrarMenu = false;

  constructor(private authService: AuthService) {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar === 'logado';
      }
    );
  }
}
