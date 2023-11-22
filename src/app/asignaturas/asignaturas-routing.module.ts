import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarAsignaturasComponent} from "./listar-asignaturas/listar-asignaturas.component";
import {CrearAsignaturaComponent} from "./crear-asignatura/crear-asignatura.component";
import {DetalleAsignaturaComponent} from "./detalle-asignatura/detalle-asignatura.component";
import {EditarAsignaturaComponent} from "./editar-asignatura/editar-asignatura.component";

const routes: Routes = [
  {
    path: '',
    component: ListarAsignaturasComponent
  },
  {
    path: 'listar',
    component: ListarAsignaturasComponent
  },
  {
    path: 'crear',
    component: CrearAsignaturaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleAsignaturaComponent
  },
  {
    path: 'editar/:id',
    component: EditarAsignaturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignaturasRoutingModule { }
