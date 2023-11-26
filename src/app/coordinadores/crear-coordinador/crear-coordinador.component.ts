import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CoordinadorService} from "../service/coordinador.service";
import Swal from "sweetalert2";
import {Coordinador} from "../model/coordinador";


@Component({
  selector: 'app-crear-coordinador',
  templateUrl: './crear-coordinador.component.html',
  styleUrls : ['./crear-coordinador.component.css']
})
export class CrearCoordinadorComponent implements OnInit{

  public crearCoordinadorForm: FormGroup= new FormGroup({
    coordinadorId: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),

  });
  public formCoordinador!:FormGroup;



  public  formBuilder!:FormBuilder;

  constructor(public router: Router, formBuilder: FormBuilder, private coordinadorService: CoordinadorService) {
    this.formBuilder = formBuilder;
  }

  cancelarCrearCoordinador() {
    this.router.navigate(['/listar']);
  }

  crearCoordinador(coordinador: Coordinador) {
    this.coordinadorService.crearCoordinador(coordinador).subscribe(
      (coordinador: Coordinador) => {
        //console.log(docente);
        Swal.fire(
          'Usuario creado',
          `El coordinador ${coordinador.nombre} ha sido creado con exito`,
          'success'
        );
        this.crearCoordinadorForm.reset();
        this.router.navigate(['/listar'])
      });
  }

  ngOnInit(): void {
    this.formCoordinador = this.formBuilder.group({
      nombre: ['', Validators.required,Validators.minLength(4)],
      apellido: ['', Validators.required,Validators.minLength(4)],
      telefono: ['', Validators.required,Validators.minLength(4)],
      correo: ['', Validators.required,Validators.minLength(4)],

    });
  }

}
