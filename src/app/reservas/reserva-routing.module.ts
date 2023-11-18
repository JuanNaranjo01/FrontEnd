import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarReservaComponent} from "./listar-reserva/listar-reserva.component";
import {CrearReservaComponent} from "./crear-reserva/crear-reserva.component";
import {DetalleReservaComponent} from "./detalle-reserva/detalle-reserva.component";

const routes: Routes = [
  {
    path: '',
    component: ListarReservaComponent
  },
  {
    path: 'listar',
    component: ListarReservaComponent
  },
  {
    path: 'crear',
    component: CrearReservaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleReservaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
