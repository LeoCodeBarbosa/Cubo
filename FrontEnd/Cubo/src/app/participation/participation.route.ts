import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipationAppComponent } from './participation.app.component';

const participationRouterConfig: Routes = [
    {
        path: '', component: ParticipationAppComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(participationRouterConfig)
    ],
    exports: [RouterModule]
})
export class ParticipationRoutingModule { }