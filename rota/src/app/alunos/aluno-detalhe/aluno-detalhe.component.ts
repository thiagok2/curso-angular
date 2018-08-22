import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy  {

  inscricao: Subscription;
  aluno: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log('alunoId:' +  id);
        this.aluno = this.alunosService.getAluno(id);

        console.log(this.aluno);
      }
    );

    /*
    this.inscricao = this.route.data.subscribe(
      (info: {aluno: any}) => {
        console.log('Recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
    */
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
