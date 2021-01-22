import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipationAppComponent } from './participation.app.component';
import { ListComponent } from './list/list.component';
import { ParticipationRoutingModule } from './participation.route';
import { ParticipationService } from './service/participation.service';
import { DoughnutChartComponent } from '../shared/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
      ParticipationAppComponent,
      ListComponent,
      DoughnutChartComponent
    ],
    imports: [
      CommonModule,
      ParticipationRoutingModule,
      ChartsModule
    ],
    providers: [
     ParticipationService
    ]
  })


export class ParticipationModule { }