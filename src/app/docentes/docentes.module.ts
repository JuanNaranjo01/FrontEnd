import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocentesRoutingModule } from './docentes-routing.module';
import {ListarDocenteComponent} from "./listar-docente/listar-docente.component";
import {CrearDocenteComponent} from "./crear-docente/crear-docente.component";
import {DetalleDocenteComponent} from "./detalle-docente/detalle-docente.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListarDocenteComponent,
    CrearDocenteComponent,
    DetalleDocenteComponent,
  ],
  exports: [
    ListarDocenteComponent
  ],
  imports: [
    CommonModule,
    DocentesRoutingModule,
    ReactiveFormsModule
  ]
})
export class DocentesModule { }
