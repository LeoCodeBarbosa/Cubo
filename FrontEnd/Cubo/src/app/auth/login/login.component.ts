import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomValidators } from 'ngx-custom-validators';
import { ToastrService } from 'ngx-toastr';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  loginForm: FormGroup;
  user: User;

  returnUrl: string;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
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
      }
    };

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

    super.configureBaseValidationMsg(this.validationMessages);    
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    });
  }

  ngAfterViewInit(): void {
    super.configureBaseFormValidation(this.formInputElements, this.loginForm);
  }

  login() {    
    debugger;
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.user = Object.assign({}, this.user, this.loginForm.value);

      this.authService.login(this.user)
      .subscribe(
          sucesso => {this.processarSucesso(sucesso)},
          falha => {this.processarFalha(falha)}
      );
    }
  }  

  processarSucesso(response: any) {
    this.loginForm.reset();
    this.errors = [];

    this.authService.LocalStorage.saveUserLocalData(response);

    let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
    if(toast){
      toast.onHidden.subscribe(() => {
        this.returnUrl
        ? this.router.navigate([this.returnUrl])
        : this.router.navigate(['/participation']);
      });
    }
  }

  processarFalha(fail: any){
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
