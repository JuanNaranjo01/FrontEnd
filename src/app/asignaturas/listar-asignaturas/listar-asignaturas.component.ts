import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Asignatura} from "../model/asignatura";
import {AsignaturaService} from "../service/asignatura.service";

@Component({
  selector: 'app-listar-asignaturas',
  templateUrl: './listar-asignaturas.component.html',
  styleUrls: ['./listar-asignaturas.component.css']
})
export class ListarAsignaturasComponent implements OnInit {
  public asignaturas: Array<Asignatura> = [];
  public nombreAsignaturas!: string;
  public asignaturaSelected!: Asignatura;
  public selected: boolean = false;

  constructor(private asignaturaService: AsignaturaService) {
    this.asignaturaService.getAsignaturas().subscribe((asignaturas: Array<Asignatura>) => {
        this.asignaturas = asignaturas;
      }
    );
  }

  ngOnInit(): void {
  }

  onSelected(asignaturas: Asignatura) {
    this.asignaturaSelected = asignaturas;
    this.selected = true

    Swal.fire('Detalles de la asignatura', '<table class="table">\n' +
      '  <thead>\n' +
      '  <tr>\n' +
      '    <th scope="col">Nombre</th>\n' +
      '    <th scope="col">ID de la asignatura</th>\n' +
      '  </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td>' + this.asignaturaSelected.nombreAsignatura + '</td>\n' +
      '      <td>' + this.asignaturaSelected.codAsignatura + '</td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>', 'success');
  }
  borrarAsignatura(asignaturas: Asignatura) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Usted no puede revertir eso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar la asignatura!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.asignaturaService.borrarAsignatura(asignaturas.codAsignatura).subscribe(() => {
          Swal.fire({
            title: "Eliminado!",
            text: "La asignatura ha sido eliminada.",
            icon: "success"
          });
          this.asignaturas = this.asignaturas.filter((c) => c !== asignaturas); // Actualiza la lista de progrmas en la vista
        });
      }
    });
  }

  editarAsignatura(asignaturas: Asignatura) {
    Swal.fire({
      title: 'Editar asignatura',
      html:
        '<p>ID de la asignatura: <strong>' + asignaturas.codAsignatura + '</strong></p>' +
        '<input id="nombre" class="swal2-input" placeholder="Nombre" value="' + asignaturas.nombreAsignatura + '">',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;

        const asignaturaActualizado: Asignatura = { codAsignatura: asignaturas.codAsignatura,  nombreAsignatura: nombre };

        this.asignaturaService.editarAsignatura(asignaturas.codAsignatura, asignaturaActualizado).subscribe(() => {
          Swal.fire('Editado!', 'La asignatura ha sido editada correctamente.', 'success');
          // Actualiza la lista de programas en la vista o realiza alguna acción adicional
        });
      }
    });
  }

  protected readonly Asignaturas = Asignatura;
}
