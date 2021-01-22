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
                required: 'Informe o Primeiro Nome',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 200 caracteres'
            },
            lastName: {
                required: 'Informe o Sobrenome',
                minlength: 'Mínimo de 2 caracteres',
                maxlength: 'Máximo de 1000 caracteres'
            },
            value: {
                required: 'Informe o Valor',
            }
        }

        super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
        super.configurarValidacaoFormularioBase(formInputElements, this.participationForm);
    }
}