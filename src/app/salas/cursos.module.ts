import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from './listar-salas/listar-cursos.component';
import { CrearCursoComponent } from './crear-sala/crear-curso.component';
import { DetalleCursoComponent } from './detalle-sala/detalle-curso.component';
import {CursosRoutingModule} from "./cursos-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { EditarCursoComponent } from './editar-sala/editar-curso.component';




@NgModule({
  declarations: [
    ListarCursosComponent,
    CrearCursoComponent,
    DetalleCursoComponent,
    EditarCursoComponent,
  ],
  exports: [
    ListarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
