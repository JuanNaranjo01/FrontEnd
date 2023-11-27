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
export class CrearAsignaturaComponent implements OnInit{
  public crearAsignaturaForm:  FormGroup = new FormGroup({codAsignatura:new FormControl(""), nombreAsignatura: new FormControl("")});
  public formAsignaturas!: FormGroup;
  public formBuilder!: FormBuilder;


  constructor(public router: Router, formBuilder:FormBuilder, private asignaturaService: AsignaturaService) {
    this.formBuilder = formBuilder;
  }


  cancelarCrearAsignatura() {
    this.router.navigate(['/listar']);
  }

  crearAsignatura(asignatura: Asignatura) {
    this.asignaturaService.crearAsignatura(asignatura).subscribe(
      (asignatura: Asignatura)=> {
        console.log(asignatura);
        Swal.fire(
          'asignatura creada',
          `La asignatura ${asignatura.nombreAsignatura} ha sido creado con éxito`,
          'success'
        );
        this.crearAsignaturaForm.reset();
        this.router.navigate(['/listar']);
      });
  }

  ngOnInit() {
    this.formAsignaturas = this.formBuilder.group({
      nombreAsignatura: ['', Validators.required, Validators.minLength(4)]
    });
  }
}
