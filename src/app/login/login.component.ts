// login.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponentModal } from '../login-modal/login-modal.component';
import { InvalidCredentialsModalComponent } from '../invalid-credentials-modal/invalid-credentials-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: LoginService, public dialog: MatDialog) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.login(credentials).subscribe(
        (response) => {
          if (typeof response === 'string') {
            // Abre el modal con el mensaje de respuesta
            const dialogRef = this.dialog.open(LoginComponentModal, {
              data: { message: response },
            });
          } else {
            const token = response.token;
            console.log('Token recibido', token);
            localStorage.setItem('token', token);
            // Resto de tu lógica después de un inicio de sesión exitoso
          }
        },
        (error) => {
          // Manejar el error aquí
          console.error('Error en el login', error);

          // Verificar si el error es por credenciales inválidas y abrir el modal correspondiente
          if (error.status === 401) {
            const dialogRef = this.dialog.open(InvalidCredentialsModalComponent, {
              data: { message: 'Credenciales inválidas. Por favor, verifica tus datos e intenta nuevamente.' },
            });
          }
        }
      );
    }
  }
}
