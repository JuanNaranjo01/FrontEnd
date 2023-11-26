import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CoordinadorService} from "../service/coordinador.service";
import {Coordinador} from "../model/coordinador";
import Swal from "sweetalert2";
@Component({
  selector: 'app-editar-coordinador',
  templateUrl: './editar-coordinador.component.html',
  styleUrls: ['./editar-coordinador.component.css']
})
export class EditarCoordinadorComponent implements OnInit{

  public editarCoordinadorForm: FormGroup= new FormGroup({
    id: new FormControl('',[Validators.required,Validators.minLength(4)]),
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
    apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
    telefono: new FormControl('',[Validators.required,Validators.minLength(4)]),
    correo: new FormControl('',[Validators.required,Validators.minLength(4)]),
  });

  public coordinador!: Coordinador;


  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de curso
   * @param cursoService Servicio de curso para crear un curso
   * @param route Ruta del componente
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private coordinadorService: CoordinadorService, private route: ActivatedRoute) {

  }

  /**
   * Metodo que cancela la edicion de un curso
   */
  cancelarEditarCoordinador() {
    this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
  }

  /**
   * Metodo que edita un curso en el servicio
   * @param curso Curso a crear
   */
  editarCoordinador(coordinador: Coordinador) {
    this.coordinadorService.editarCoordinador(coordinador).subscribe( // Le decimos al servicio que edite el docente
      (coordinador: Coordinador) => {
        // console.log(curso);
        Swal.fire( // Le decimos al usuario que el docente ha sido editado
          'Usuario editado',
          `El usuario ${coordinador.nombre} ha sido actualizado con exito`,
          'success'
        );
        this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
      });
  }

  /**
   * Metodo que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    const idCoordinador = parseInt(this.route.snapshot.params['id']); // Obtenemos el id del curso a editar

    this.coordinadorService.getCoordinador(idCoordinador).subscribe((coordinador) => { // Le decimos al servicio que nos traiga el curso a editar
      this.coordinador = coordinador; // Obtenemos el curso a editar
      // console.log(this.curso);
      this.editarCoordinadorForm = this.formBuilder.group({ // Creamos el formulario editarCursoForm

        id: [this.coordinador.coordinadorId, []], // mostramos el Id del curso. El id no se puede editar
        nombre: [this.coordinador.nombre, [Validators.required, Validators.minLength(4)]], // Mostramos el nombre del curso
        apellido: [this.coordinador.apellido, [Validators.required, Validators.minLength(4)]], // Mostramos el programa del curso
        telefono: [this.coordinador.telefono, [Validators.required, Validators.minLength(4)]], // Mostramos el programa del curso
        correo: [this.coordinador.correo, [Validators.required, Validators.minLength(4)]], // Mostramos el programa del curso
      });
    });
  }

}

