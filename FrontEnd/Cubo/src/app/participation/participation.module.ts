import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipationAppComponent } from './participation.app.component';
import { IndexParticipationComponent } from './index/index.component';
import { ListParticipationComponent } from './list/list.component';
import { NewParticipationComponent } from './new/new.component';
import { ParticipationRoutingModule } from './participation.route';
import { ParticipationService } from './service/participation.service';
import { ParticipationGuard } from './service/participation.guard';
import { DoughnutChartComponent } from '../shared/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ParticipationAppComponent,
    IndexParticipationComponent,
    ListParticipationComponent,
    DoughnutChartComponent,
    NewParticipationComponent
  ],
  imports: [
    CommonModule,
    ParticipationRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    ParticipationService,
    ParticipationGuard
  ]
})


export class ParticipationModule { }