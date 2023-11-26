import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {AsignaturaService} from "../service/asignatura.service";
import {Asignatura} from "../model/asignatura";



@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent implements OnInit {
  public crearAsignaturaForm: FormGroup= new FormGroup({codAsignatura: new FormControl(""),nombreAsignatura: new FormControl("")});

  public formAsignatura!: FormGroup;

public formBuilder!: FormBuilder;


  constructor(public router: Router, formBuilder: FormBuilder, private asignaturaService: AsignaturaService) {

    this.formBuilder= formBuilder;
  }

  /**
   * Metodo que crea una asignatura
   */
  cancelarCrearAsignatura() {
    this.router.navigate(['/listar']);
  }

  /**
   * Metodo que crea un asignatura en el servicio
   * @param asignatura Asignatura a crear
   */
  crearAsignatura(asignatura: Asignatura) {
    this.asignaturaService.crearAsignatura(asignatura).subscribe(
      (asignatura: Asignatura) => {
        // console.log(curso);
        Swal.fire(
          'Asignatura creada',
          `La asignatura ${asignatura.nombreAsignatura} ha sido creado con exito`,
          'success'
        );
        this.crearAsignaturaForm.reset();  //Resetea el formulario
        this.router.navigate(['/listar']);
      });
  }
//regexp: regular expression
  ngOnInit(): void {
    this.formAsignatura = this.formBuilder.group({
      asignatura: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]]
    });
  }
}
