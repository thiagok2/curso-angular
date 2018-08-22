import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: any[];

  constructor(private alunoService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }

}
