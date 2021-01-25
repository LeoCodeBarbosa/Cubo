import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { BaseGuard } from 'src/app/shared/services/base.guard';

@Injectable()
export class ParticipationGuard extends BaseGuard implements CanActivate {
    constructor(protected router: Router) { super(router); }

    canActivate(routeAc: ActivatedRouteSnapshot) {
        return super.validatedUser(routeAc);
    }  
}