import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from 'ngx-custom-validators';
import { ToastrService } from 'ngx-toastr';


import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  registerForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {

    super();

    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    super.configureBaseValidationMsg(this.validationMessages);
  }

  ngOnInit(): void {

    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let confirmPassword = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password)]);

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  ngAfterViewInit(): void {
    super.configureBaseFormValidation(this.formInputElements, this.registerForm);
  }

  registerUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);

      this.authService.registerUser(this.user)
        .subscribe(
          success => { this.processSuccess(success) },
          fail => { this.processFail(fail) }
        );

      this.changesNotSalved = false;
    }
  }

  processSuccess(response: any) {
    this.registerForm.reset();
    this.errors = [];

    this.authService.LocalStorage.saveUserLocalData(response);

    let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/participation']);
      });
    }
  }

  processFail(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
