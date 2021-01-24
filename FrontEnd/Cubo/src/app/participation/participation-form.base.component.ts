import { Participation } from './models/participation';
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';

import { utilsBr } from 'js-brasil';

import { FormBaseComponent } from '../base-components/form-base.component';

export abstract class ParticipationBaseComponent extends FormBaseComponent {
    
    participation: Participation;
    errors: any[] = [];
    participationForm: FormGroup;

    MASKS = utilsBr.MASKS;

    constructor() {
        super();

        this.validationMessages = {
            firstName: {
                required: 'Informe o nome',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 200 caracteres'
            },
            lastName: {
                required: 'Informe o sobrenome',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 1000 caracteres'
            },
            value: {
                required: 'Informe o valor',
                min: 'Valor deve ser maior que 0'
            }
        }

        super.configureBaseValidationMsg(this.validationMessages);
    }

    protected configureFormValidation(formInputElements: ElementRef[]) {
        super.configureBaseFormValidation(formInputElements, this.participationForm);
    }
}