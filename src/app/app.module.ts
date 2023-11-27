import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { MatDialogModule } from '@angular/material/dialog';



import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SweetAlert2LoaderService, SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentModal } from './login-modal/login-modal.component';
import { InvalidCredentialsModalComponent } from './invalid-credentials-modal/invalid-credentials-modal.component';


const rutas: Routes =[
  {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentModal,
    InvalidCredentialsModalComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    HttpClientModule,
      MatDialogModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
