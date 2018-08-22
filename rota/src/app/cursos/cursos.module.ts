import { CursosRoutingModule } from './cursos.routing.module';
// import { RouterModule } from '@angular/router';
import { CursosServiceService } from './cursos-service.service';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CursoNaoencontradoComponent } from './curso-naoencontrado/curso-naoencontrado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalhesComponent,
        CursoNaoencontradoComponent
    ],
    providers: [CursosServiceService]
})
export class CursosModule { }
