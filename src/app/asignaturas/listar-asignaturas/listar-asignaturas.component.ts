import {Component, OnInit} from '@angular/core';
import {Asignatura} from "../model/asignatura";
import {AsignaturaService} from "../service/asignatura.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-listar-asignaturas',
  templateUrl: './listar-asignaturas.component.html',
  styleUrls: ['./listar-asignaturas.component.css']
})
export class ListarAsignaturasComponent implements OnInit {
  public asignaturas: Array<Asignatura> = [];
  public nombreAsignatura!: string;
  public asignaturaSelected!: Asignatura;
  public selected: boolean = false;

  constructor(private asignaturaService: AsignaturaService, private routerPath: Router, private router: ActivatedRoute) {
    this.asignaturaService.getAsignaturas().subscribe(
      (asignaturas: Array<Asignatura>) => {
        this.asignaturas = asignaturas;
      }
    );
  }

  /**
   * Metodo que se ejecuta al iniciar el componente
   */


  ngOnInit(): void {
  }

  /**
   * Evento que se dispara al seleccionar un curso en la lista
   * @param asignatura Curso seleccionado
   */

  onSelected(asignatura: Asignatura) {
    this.asignaturaSelected = asignatura;
    this.selected=true;
    // console.log(this.cursoSelected); //Imprime en la consola del navegador el curso seleccionado
    this.routerPath.navigate(['/editar/' + this.asignaturaSelected.codAsignatura]); //Redirecciona a la ruta /editar/:id
  }

  /**
   * Metodo que elimina un curso seleccionado de la lista
   * @param asignatura Curso a eliminar
   */

  borrarAsignatura(asignatura: Asignatura) {
    Swal.fire({
      title: "Está seguro?",
      text: "Usted no puede revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borra la asignatura!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.asignaturaService.borrarAsignatura(asignatura.codAsignatura).subscribe(() => { // Llama al servicio para eliminar el curso
          Swal.fire({
            title: "Eliminado!",
            text: "La asignatura ha sido eliminada.",
            icon: "success"
          });
          this.asignaturas = this.asignaturas.filter((c) => c !== asignatura); // Actualiza la lista de cursos en la vista
        });
      }
    });
  }
  crearAsignatura() {
    this.routerPath.navigate(['/crear']);
  }
}

