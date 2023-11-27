import {Component, Input} from '@angular/core';
import {Asignatura} from "../model/asignatura";

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.component.html',
  styleUrls: ['./detalle-asignatura.component.css']
})
export class DetalleAsignaturaComponent {
  @Input() asignaturas!: Asignatura;
}
