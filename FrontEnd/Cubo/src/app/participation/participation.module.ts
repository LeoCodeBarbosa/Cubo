import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipationAppComponent } from './participation.app.component';
import { ListComponent } from './list/list.component';
import { ParticipationRoutingModule } from './participation.route';
import { ParticipationService } from './service/participation.service';

@NgModule({
    declarations: [
      ParticipationAppComponent,
      ListComponent
    ],
    imports: [
      CommonModule,
      ParticipationRoutingModule
    ],
    providers: [
     ParticipationService
    ]
  })


export class ParticipationModule { }