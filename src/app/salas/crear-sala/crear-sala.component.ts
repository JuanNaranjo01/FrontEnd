import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SalaService} from "../service/sala.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Sala} from "../model/sala";


@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit{
  public crearSalaForm: FormGroup= new FormGroup({
    sala: new FormControl('',[Validators.required,Validators.minLength(4)]),
    id: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de curso
   * @param salaService Servicio de curso para crear un curso
   */

  constructor(public router: Router, public formBuilder: FormBuilder, private salaService: SalaService) {

  }


  cancelarCrearSala() {
    this.router.navigate(['/listar']);
  }

  /**
   * Metodo que crea un sala en el servicio
   * @param sala Sala a crear
   */

  crearSala(sala: Sala) {
    this.salaService.crearSala(sala).subscribe(
      (sala: Sala)=> {
        console.log(sala);
        Swal.fire(
          'Sala creada',
          `La Sala ${sala.sala} ha sido creada con éxito`,
          'success'
        );
        this.crearSalaForm.reset();
      });
  }

  ngOnInit(): void {
    this.crearSalaForm = this.formBuilder.group({
      sala: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      id: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
