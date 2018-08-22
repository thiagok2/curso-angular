import { AlunosGuard } from './guards/aluno-guard';
import { CursosGuard } from './guards/cursos-guard';
import { AuthGuard } from './guards/auth-guard';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
// import { CursosModule } from './cursos/cursos.module';
import { CursosServiceService } from './cursos/cursos-service.service';
// import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalhesComponent } from './cursos/curso-detalhes/curso-detalhes.component';
// import { CursoNaoencontradoComponent } from './cursos/curso-naoencontrado/curso-naoencontrado.component';
import { AppRoutingModule } from './app.routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosModule } from './alunos/alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    AlunosModule,
    AppRoutingModule
    // routing
  ],
  providers: [CursosServiceService, AuthService, AuthGuard, CursosGuard, AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
