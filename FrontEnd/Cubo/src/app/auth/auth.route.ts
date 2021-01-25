import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAppComponent } from './auth.app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const authRouterConfig: Routes = [
    {
        path: '', component: AuthAppComponent,
        children: [
            { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRouterConfig)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }