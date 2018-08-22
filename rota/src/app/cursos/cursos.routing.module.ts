
import { CursoNaoencontradoComponent } from './curso-naoencontrado/curso-naoencontrado.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursosComponent } from './cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: 'nao-encontrado', component: CursoNaoencontradoComponent },
    { path: ':id', component: CursoDetalhesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {

}
