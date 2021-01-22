import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { NewParticipationComponent } from '../new/new.component';

@Injectable()
export class ParticipationGuard implements CanActivate, CanDeactivate<NewParticipationComponent> {
    
    constructor(protected router: Router){}

    canDeactivate(component: NewParticipationComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }        
        return true
    }

    canActivate(routeAc: ActivatedRouteSnapshot) {
        return true;//super.validarClaims(routeAc);
    }    
}