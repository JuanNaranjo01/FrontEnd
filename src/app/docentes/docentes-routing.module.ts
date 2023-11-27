import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarDocenteComponent} from "./listar-docente/listar-docente.component";
import {CrearDocenteComponent} from "./crear-docente/crear-docente.component";
import {DetalleDocenteComponent} from "./detalle-docente/detalle-docente.component";


const routes: Routes = [
  {
    path: '',
    component: ListarDocenteComponent
  },
  {
    path: 'listar',
    component: ListarDocenteComponent
  },
  {
    path: 'crear',
    component: CrearDocenteComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleDocenteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
