import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

export abstract class BaseGuard {

    private localStorageUtils = new LocalStorageUtils();

    constructor(protected router: Router){}
    
    protected validatedUser(routeAc: ActivatedRouteSnapshot) : boolean {

        if(!this.localStorageUtils.getUserToken()){
            this.router.navigate(['/auth/login/'], { queryParams: { returnUrl: this.router.url }});
        }  
        return true;  
    }
}