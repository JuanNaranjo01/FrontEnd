import {Component, OnInit} from '@angular/core';
import {Docente} from "../model/docente";
import {DocenteService} from "../service/docente.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-listar-docente',
  templateUrl: './listar-docente.component.html',
  styleUrls: ['./listar-docente.component.css']
})
export class ListarDocenteComponent implements OnInit{
  public docentes: Array<Docente> = [];
  public nombreDocente!: string;
  public docenteSelected!: Docente;
  public selected: boolean = false;


  constructor(private docenteService: DocenteService, private routerPath: Router, private router: ActivatedRoute) {
    this.docenteService.getDocentes().subscribe(
      (docentes:Array<Docente>) => {
    this.docentes = docentes;
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
onSelected(docente: Docente) {
  this.docenteSelected = docente;
  this.selected = true;
  this.routerPath.navigate(['/editar/' + this.docenteSelected.docenteId]);
}

  borrarDocente(docente: Docente) {

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
        this.docenteService.borrarDocente(docente.docenteId).subscribe(() => {
          Swal.fire({
            title: "Eliminado!",
            text: "El usuario ha sido eliminado.",
            icon: "success"
          });
          this.docentes = this.docentes.filter((c) => c !== docente);
        });
      }
    });
  }
    crearDocente(){
    this.routerPath.navigate(['/crear']);
    }
  }



