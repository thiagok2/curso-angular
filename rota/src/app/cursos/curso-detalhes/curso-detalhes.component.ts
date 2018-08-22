import { CursosServiceService } from '../cursos-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit, OnDestroy  {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosServiceService) {
    // console.log(this.route);
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        console.log('meu param: ' + this.id);

        this.curso = this.cursosService.getCurso(this.id);

        if (this.curso == null) {
            this.router.navigate(['/cursos/nao-encontrado']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
