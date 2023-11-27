import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarACrearAsignaturas() {
    this.router.navigate(['crear']); // Aquí se utiliza el nombre de la ruta 'crear' definida en el AsignaturasRoutingModule
  }

}
