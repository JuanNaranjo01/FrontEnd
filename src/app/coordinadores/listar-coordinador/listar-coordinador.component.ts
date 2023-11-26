import {Component, OnInit} from '@angular/core';
import {Coordinador} from "../model/coordinador";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {CoordinadorService} from "../service/coordinador.service";


@Component({
  selector: 'app-listar-coordinador',
  templateUrl: './listar-coordinador.component.html',
  styleUrls: ['./listar-coordinador.component.css']
})
export class ListarCoordinadorComponent implements OnInit{
  public coordinadores: Array<Coordinador> = [];
  public nombreCoordinador!: string;
  public coordinadorSelected!: Coordinador;
  public selected: boolean = false;


  constructor(private coordinadorService: CoordinadorService, private routerPath: Router, private router: ActivatedRoute) {
    this.coordinadorService.getCoordinadores().subscribe(
      (coordinadores:Array<Coordinador>) => {
        this.coordinadores = coordinadores;
      }
    );

  }

  ngOnInit():void {
    // this.cursos[0] = {id: 1, curso: 'Angular', programa: 'Ingenieria de sistemas'};
    // this.cursos[1] = {id: 2, curso: 'Java', programa: 'Ingenieria de sistemas'};
    // this.cursos[2] = {id: 3, curso: 'Python', programa: 'Ingenieria de sistemas'};
    // this.cursos[3] = {id: 4, curso: 'C#', programa: 'Ingenieria de sistemas'};
    // this.cursos[4] = {id: 5, curso: 'C++', programa: 'Ingenieria de sistemas'};
  }
  onSelected(coordinador: Coordinador) {
    this.coordinadorSelected = coordinador;
    this.selected = true;
    this.routerPath.navigate(['/editar/' + this.coordinadorSelected.coordinadorId]);
  }

  borrarCoordinador(coordinador: Coordinador) {

    Swal.fire({
      title: "Estas seguro?",
      text: "Usted no puede revertir eso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d2933f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, borra el usuario!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.coordinadorService.borrarCoordinador(coordinador.coordinadorId).subscribe(() => {
          Swal.fire({
            title: "Eliminado!",
            text: "El usuario ha sido eliminado.",
            icon: "success"
          });
          this.coordinadores = this.coordinadores.filter((c) => c !== coordinador);
        });
      }
    });
  }
  crearCoordinador(){
    this.routerPath.navigate(['/crear']);
  }


}
