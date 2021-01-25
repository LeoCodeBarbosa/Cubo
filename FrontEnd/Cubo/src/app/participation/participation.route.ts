import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipationAppComponent } from './participation.app.component';
import { ParticipationGuard } from './services/participation.guard';

const participationRouterConfig: Routes = [
    {
        path: '', component: ParticipationAppComponent,
        canActivate: [ParticipationGuard],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(participationRouterConfig)
    ],
    exports: [RouterModule]
})
export class ParticipationRoutingModule { }