import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Asignatura} from "../model/asignatura";
import {ActivatedRoute, Router} from "@angular/router";
import {AsignaturaService} from "../service/asignatura.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-asignatura',
  templateUrl: './editar-asignatura.component.html',
  styleUrls: ['./editar-asignatura.component.css']
})
export class EditarAsignaturaComponent implements OnInit{

  // Creamos e inicializamos el formulario editarAsignaturaForm usando el constructor de FormGroup
  public editarAsignaturaForm: FormGroup= new FormGroup({
    id: new FormControl('',[Validators.required,Validators.minLength(4)]),
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  // Creamos un atributo (relacion) asignatura que es el que vamos a editar
  public asignatura!: Asignatura;

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de asignatura
   * @param asignaturaService Servicio de asignatura para crear un curso
   * @param route Ruta del componente
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private asignaturaService: AsignaturaService, private route: ActivatedRoute) {

  }

  /**
   * Metodo que cancela la edicion de un asignatura
   */
  cancelarEditarAsignatura() {
    this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
  }

  /**
   * Metodo que edita una asignatura en el servicio
   * @param asignatura asignatura a crear
   */
  editarAsignatura(asignatura: Asignatura) {
    this.asignaturaService.editarAsignatura(asignatura).subscribe( // Le decimos al servicio que edite la asignatura
      (asignatura: Asignatura) => {
        console.log(asignatura);
        Swal.fire( // Le decimos al usuario que la asignatura ha sido editado
          'Asigantura editada',
          `La asignatura ${asignatura.nombreAsignatura} ha sido actualizado con exito`,
          'success'
        );
        this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
      });
  }


  ngOnInit(): void {
    const idAsignatura = parseInt(this.route.snapshot.params['id']); // Obtenemos el id del curso a editar

    this.asignaturaService.getAsignatura(idAsignatura).subscribe((asignatura) => { // Le decimos al servicio que nos traiga el curso a editar
      this.asignatura = asignatura; // Obtenemos el curso a editar
      // console.log(this.curso);
      this.editarAsignaturaForm = this.formBuilder.group({ // Creamos el formulario editarCursoForm
        nombre: [this.asignatura.nombreAsignatura, [Validators.required, Validators.minLength(4)]], // Mostramos el nombre del curso
        id: [this.asignatura.codAsignatura, []], // mostramos el Id del curso. El id no se puede editar
      });
    });
  }

}
