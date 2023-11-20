import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasRoutingModule } from './salas-routing.module';
import {ListarSalasComponent} from "./listar-salas/listar-salas.component";
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";
import {DetalleSalaComponent} from "./detalle-sala/detalle-sala.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListarSalasComponent,
    CrearSalaComponent,
    DetalleSalaComponent,
  ],
  exports: [
    ListarSalasComponent
  ],
  imports: [
    CommonModule,
    SalasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalasModule { }
