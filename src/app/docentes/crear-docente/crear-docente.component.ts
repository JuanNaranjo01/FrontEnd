import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DocenteService} from "../service/docente.service";
import Swal from "sweetalert2";
import {Docente} from "../model/docente";


@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls : ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit{

  public crearDocenteForm: FormGroup= new FormGroup({
    docenteId: new FormControl('',[Validators.required,Validators.minLength(4)]),
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
    apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
    telefono: new FormControl('',[Validators.required,Validators.minLength(4)]),
    correo: new FormControl('',[Validators.required,Validators.minLength(4)]),
    asignatura: new FormControl('',[Validators.required,Validators.minLength(4)]),
    facultad: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  constructor(public router: Router,public formBuilder: FormBuilder, private docenteService: DocenteService) {
  this.formBuilder=formBuilder;
  }

  cancelarCrearDocente() {
    this.router.navigate(['/listar']);
  }

  crearDocente(docente: Docente) {
    this.docenteService.crearDocente(docente).subscribe(
      (docente: Docente) => {
        //console.log(docente);
        Swal.fire(
          'Usuario creado',
          `El usuario ${docente.nombre} ha sido creado con exito`,
          'success'
        );
        this.crearDocenteForm.reset();
        this.router.navigate(['/listar'])
      });

  }

  ngOnInit(): void {
    this.crearDocenteForm = this.formBuilder.group({
      docenteId: new FormControl('',[Validators.required,Validators.minLength(4)]),
      nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
      apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
      telefono: new FormControl('',[Validators.required,Validators.minLength(4)]),
      correo: new FormControl('',[Validators.required,Validators.minLength(4)]),
      asignatura: new FormControl('',[Validators.required,Validators.minLength(4)]),
      facultad: new FormControl('',[Validators.required,Validators.minLength(4)])
    });
  }

}
