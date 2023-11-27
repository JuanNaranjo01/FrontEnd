import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarCursosComponent} from "./listar-salas/listar-cursos.component";
import {CrearCursoComponent} from "./crear-sala/crear-curso.component";
import {DetalleCursoComponent} from "./detalle-sala/detalle-curso.component";
import {EditarCursoComponent} from "./editar-sala/editar-curso.component";

const routes: Routes = [
  {
    path: '',
    component: ListarCursosComponent
  },
  {
    path: 'listar',
    component: ListarCursosComponent
  },
  {
    path: 'crear',
    component: CrearCursoComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleCursoComponent
  },
  {
    path: 'editar/:id',
    component: EditarCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
