import { CursosGuard } from './guards/cursos-guard';
import { AuthGuard } from './guards/auth-guard';
import { HomeComponent } from './home/home.component';
// import { CursoNaoencontradoComponent } from './cursos/curso-naoencontrado/curso-naoencontrado.component';
import { LoginComponent } from './login/login.component';
// import { CursoDetalhesComponent } from './cursos/curso-detalhes/curso-detalhes.component';
// import { CursosComponent } from './cursos/cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
     { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]},
    // { path: 'curso/:id', component: CursoDetalhesComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'nao-encontrado', component: CursoNaoencontradoComponent },
    { path: '', component: HomeComponent ,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
