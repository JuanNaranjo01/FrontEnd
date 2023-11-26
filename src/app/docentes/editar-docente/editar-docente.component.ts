import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DocenteService} from "../service/docente.service";
import {Docente} from "../model/docente";
import Swal from "sweetalert2";
@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit{

  public editarDocenteForm: FormGroup= new FormGroup({
    id: new FormControl('',[Validators.required,Validators.minLength(4)]),
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
    apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
    telefono: new FormControl('',[Validators.required,Validators.minLength(4)]),
    correo: new FormControl('',[Validators.required,Validators.minLength(4)]),
    asignatura: new FormControl('',[Validators.required,Validators.minLength(4)]),
    facultad: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  public docente!: Docente;


  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de curso
   * @param cursoService Servicio de curso para crear un curso
   * @param route Ruta del componente
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private docenteService: DocenteService, private route: ActivatedRoute) {

  }

  /**
   * Metodo que cancela la edicion de un curso
   */
  cancelarEditarDocente() {
    this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
  }

  /**
   * Metodo que edita un curso en el servicio
   * @param curso Curso a crear
   */
  editarDocente(docente: Docente) {
    this.docenteService.editarDocente(docente).subscribe( // Le decimos al servicio que edite el docente
      (docente: Docente) => {
        // console.log(curso);
        Swal.fire( // Le decimos al usuario que el docente ha sido editado
          'Usuario editado',
          `El usuario ${docente.nombre} ha sido actualizado con exito`,
          'success'
        );
        this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
      });
  }

  /**
   * Metodo que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    const idDocente = parseInt(this.route.snapshot.params['id']); // Obtenemos el id del curso a editar

    this.docenteService.getDocente(idDocente).subscribe((docente) => { // Le decimos al servicio que nos traiga el curso a editar
      this.docente = docente; // Obtenemos el curso a editar
      // console.log(this.curso);
      this.editarDocenteForm = this.formBuilder.group({ // Creamos el formulario editarCursoForm

        id: [this.docente.docenteId, []], // mostramos el Id del curso. El id no se puede editar

        nombre: [this.docente.nombre, [Validators.required, Validators.minLength(4)]], // Mostramos el nombre del curso
        apellido: [this.docente.apellido, [Validators.required, Validators.minLength(4)]], // Mostramos el programa del curso
        telefono: [this.docente.telefono, [Validators.required, Validators.minLength(4)]], // Mostramos el programa del curso
        correo: [this.docente.correo, [Validators.required, Validators.minLength(4)]], // Mostramos el programa del curso
        asignatura: [this.docente.asignatura, [Validators.required, Validators.minLength(4)]], // Mostramos el programa del curso
        facultad: [this.docente.facultad, [Validators.required, Validators.minLength(4)]] // Mostramos el programa del curso
      });
    });
  }

}
