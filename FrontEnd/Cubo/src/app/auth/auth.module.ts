import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthAppComponent } from './auth.app.component';

import { AuthRoutingModule } from './auth.route';
import { AuthService } from './services/auth.service';

import { CustomFormsModule } from 'ngx-custom-validators'
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AuthAppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
