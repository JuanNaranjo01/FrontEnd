import {Component, OnInit} from '@angular/core';
import {Sala} from "../model/sala";
import {SalaService} from "../service/sala.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})
export class ListarSalasComponent implements OnInit {
  public salas: Array<Sala> = [];
  public nombreSala!: string;
  public salaSelected!: Sala;
  public selected: boolean = false;

  constructor(private salaService: SalaService) {
    this.salaService.getSalas().subscribe((salas: Array<Sala>) => {
        this.salas = salas;
      }
    );
  }

  ngOnInit(): void {
  }

  onSelected(sala: Sala) {
    this.salaSelected = sala;
    this.selected = true

    Swal.fire('Detalle de la sala', '<table class="table">\n' +
      '  <thead>\n' +
      '  <tr>\n' +
      '    <th scope="col">Nombre</th>\n' +
      '    <th scope="col">ID de la sala</th>\n' +
      '  </tr>\n' +
      '  </thead>\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td>' + this.salaSelected.sala + '</td>\n' +
      '      <td>' + this.salaSelected.id + '</td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>', 'success');
  }
  borrarSala(sala: Sala) {

    Swal.fire({
      title: "Estas seguro?",
      text: "Usted no puede revertir eso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, borra la Sala!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "La sala ha sido eliminada.",
          icon: "success"
        });
      }
    });
    //this.routerPath.navigate(['/curso/detalle', curso.id]); Estrategia redireccionando la ruta
  }

  protected readonly Sala = Sala;
}
