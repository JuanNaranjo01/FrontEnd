import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasRoutingModule } from './salas-routing.module';
import {ListarSalasComponent} from "./listar-salas/listar-salas.component";
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";
import {DetalleSalaComponent} from "./detalle-sala/detalle-sala.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditarSalaComponent } from './editar-sala/editar-sala.component';


@NgModule({
  declarations: [
    ListarSalasComponent,
    CrearSalaComponent,
    DetalleSalaComponent,
    EditarSalaComponent,
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
