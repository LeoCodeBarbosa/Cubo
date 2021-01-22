import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { ParticipationService } from '../service/participation.service';
import { ParticipationBaseComponent } from '../participation-form.base.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewParticipationComponent extends ParticipationBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  constructor(private fb: FormBuilder,
    private participationService: ParticipationService,
    private router: Router,
    private toastr: ToastrService) { super(); }

  ngOnInit(): void {

    this.participationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
      value: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormulario(this.formInputElements);
  }

  addParticipation() {
    if (this.participationForm.dirty && this.participationForm.valid) {
      this.participation = Object.assign({}, this.participation, this.participationForm.value);

      this.participation.value = CurrencyUtils.StringParaDecimal(this.participation.value);

      this.participationService.newParticipation(this.participation)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.participationForm.reset();
    this.errors = [];

    let toast = this.toastr.success('Participação cadastrada com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/participation/list']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }  
}

