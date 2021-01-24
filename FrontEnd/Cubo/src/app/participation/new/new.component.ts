import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControlName } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { ParticipationService } from '../services/participation.service';
import { ParticipationBaseComponent } from '../participation-form.base.component';

@Component({
  selector: 'app-participation-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewParticipationComponent extends ParticipationBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  constructor(private fb: FormBuilder,
    private participationService: ParticipationService,
    private toastr: ToastrService) { super(); }

  ngOnInit(): void {

    this.participationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
      value: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngAfterViewInit(): void {
    super.configureFormValidation(this.formInputElements);
  }

  addParticipation() {
    if (this.participationForm.dirty && this.participationForm.valid) {
      this.participation = Object.assign({}, this.participation, this.participationForm.value);

      this.participation.value = CurrencyUtils.StringToDecimal(this.participation.value);

      this.participationService.addParticipation(this.participation)
        .subscribe(
          sucesso => { this.processSuccess(sucesso) },
          falha => { this.processFail(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processSuccess(response: any) {
    this.participationForm.reset();
    this.errors = [];

    location.reload()
  }

  processFail(fail: any) {
    this.errors = fail.error.errors;
    if(this.errors[0] == ""){
      this.toastr.error('Ocorreu um erro!', 'Error');
    }else{
      this.toastr.error(this.errors[0], 'Error');
    }
  }
}

