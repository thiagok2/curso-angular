import { AlunosGuard } from './../guards/aluno-guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth-guard';


const alunosRoutes: Routes = [
    {path: 'alunos',  component: AlunosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    children:
        [{path: 'novo', component: AlunoFormComponent},
        {path: ':id',  component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent}]
    }
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}
