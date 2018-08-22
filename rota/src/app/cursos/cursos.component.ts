import { ActivatedRoute, Router } from '@angular/router';
import { CursosServiceService } from './cursos-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;

  inscricao: Subscription;

  constructor(
    private cursoService: CursosServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams) => {
        this.pagina = queryParams['pagina'];

        console.log('novaPagina' + this.pagina);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    console.log('proximaPagina');
    this.pagina++;

    this.router.navigate(['/cursos'],
      { queryParams: {'pagina': this.pagina }});
  }

}
