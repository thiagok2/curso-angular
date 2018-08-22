import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  constructor() { }

  getCurso(id: number) {
    const cursos: any[] = this.getCursos();
    if (cursos[id]) {
      return cursos[id];
    }
    return null;
  }

  getCursos() {
    return [
      { id: 0,
        nome: 'Angular 4'},
      { id: 1,
        nome: 'ECMA Script'}
    ];
  }
}
