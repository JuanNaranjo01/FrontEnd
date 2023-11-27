import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  template: `
    <h2>Bienvenido {{ data.username }}!</h2>
    <p>Has iniciado sesión exitosamente con el token:</p>
    <p>{{ data.message }}</p>
  `,
})
export class LoginComponentModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
