import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {ListarAsignaturasComponent} from "./listar-asignaturas/listar-asignaturas.component";
import {CrearAsignaturaComponent} from "./crear-asignatura/crear-asignatura.component";
import {DetalleAsignaturaComponent} from "./detalle-asignatura/detalle-asignatura.component";
import {AsignaturasRoutingModule} from "./asignaturas-routing.module";



@NgModule({
  declarations: [
    ListarAsignaturasComponent,
    CrearAsignaturaComponent,
    DetalleAsignaturaComponent
  ],
  exports: [
    ListarAsignaturasComponent
  ],
  imports: [
    CommonModule,
    AsignaturasRoutingModule,
    ReactiveFormsModule
  ]
})
export class AsignaturasModule { }
