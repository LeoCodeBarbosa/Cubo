import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ParticipationAppComponent } from './participation.app.component';

const participationRouterConfig: Routes = [
    {
        path: '', component: ParticipationAppComponent,
        children: [
            { path: 'list', component: ListComponent }
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