// invalid-credentials-modal.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invalid-credentials-modal',
  template: `
    <h2>Credenciales inválidas</h2>
    <p>{{ data.message }}</p>
  `,
})
export class InvalidCredentialsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

