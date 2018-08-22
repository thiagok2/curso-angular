import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  static criouNovoCurso = new EventEmitter<string>();

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor(private logService: LogService) {
    console.log('CursosService::created');
   }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {

    this.logService.consoleLog(`Curso criado: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);

    CursosService.criouNovoCurso.emit(curso);

  }
}
