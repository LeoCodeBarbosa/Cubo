import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParticipationComponent } from './list/list.component';
import { NewParticipationComponent } from './new/new.component';
import { ParticipationAppComponent } from './participation.app.component';
import { ParticipationGuard } from './service/participation.guard';

const participationRouterConfig: Routes = [
    {
        path: '', component: ParticipationAppComponent,
        children: [
            { path: 'list', component: ListParticipationComponent },
            {
                path: 'add-new', component: NewParticipationComponent,
                canDeactivate: [ParticipationGuard],
                canActivate: [ParticipationGuard],
                data: [{ claim: { nome: 'Participation', valor: 'Add'}}]
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(participationRouterConfig)
    ],
    exports: [RouterModule]
})
export class ParticipationRoutingModule { }