import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { TestBootstrapComponent } from './test-bootstrap/test-bootstrap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { ExemploNgcontentComponent } from './exemplo-ngcontent/exemplo-ngcontent.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivaCustomizadaComponent } from './diretiva-customizada/diretiva-customizada.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';

import { CriarCursoModule } from './criar-curso/criar-curso/criar-curso.module';

import { CursoModule } from './cursos/curso/curso.module';

import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    TestBootstrapComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    ExemploNgcontentComponent,
    FundoAmareloDirective,
    DiretivaCustomizadaComponent,
    HighlightMouseDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursoModule,
    CriarCursoModule,
    NgbModule.forRoot()
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
