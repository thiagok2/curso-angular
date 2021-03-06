import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = ['Angular2', 'Java', 'Phonegape'];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.cursosService.emitirCursoCriado.subscribe(// nao funciona! instancia diferente
      (curso) => {
        console.log('cursoComponent::' + curso);
      }
    );

    CursosService.criouNovoCurso.subscribe(
      (cursoNovo) => this.cursos.push(cursoNovo)
    );


  }

}
