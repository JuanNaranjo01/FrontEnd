import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProgramasService} from "../service/programas.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Programa} from "../model/programa";


@Component({
  selector: 'app-crear-programas',
  templateUrl: './crear-programas.component.html',
  styleUrls: ['./crear-programas.component.css']
})
export class CrearProgramasComponent implements OnInit{
  public crearProgramasForm:  FormGroup = new FormGroup({id:new FormControl(""), programa: new FormControl("")});
  public formProgramas!: FormGroup;
  public formBuilder!: FormBuilder;


  constructor(public router: Router, formBuilder:FormBuilder, private programasService: ProgramasService) {
    this.formBuilder = formBuilder;
  }


  cancelarCrearProgramas() {
    this.router.navigate(['/listar']);
  }

  crearProgramas(programa: Programa) {
    this.programasService.crearProgramas(programa).subscribe(
      (programa: Programa)=> {
        console.log(programa);
        Swal.fire(
          'Programa creado',
          `El programa ${programa.programa} ha sido creado con éxito`,
          'success'
        );
        this.crearProgramasForm.reset();
        this.router.navigate(['/listar']);
      });
  }

  ngOnInit() {
    this.formProgramas = this.formBuilder.group({
      programa: ['', Validators.required, Validators.minLength(4)]
    });
  }
}
