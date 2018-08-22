import { CursoNaoencontradoComponent } from './cursos/curso-naoencontrado/curso-naoencontrado.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalhesComponent } from './cursos/curso-detalhes/curso-detalhes.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalhesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nao-encontrado', component: CursoNaoencontradoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
