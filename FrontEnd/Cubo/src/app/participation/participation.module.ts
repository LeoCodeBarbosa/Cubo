import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipationAppComponent } from './participation.app.component';
import { IndexParticipationComponent } from './index/index.component';
import { ListParticipationComponent } from './list/list.component';
import { NewParticipationComponent } from './new/new.component';
import { DeleteParticipationComponent } from './delete/delete.component';
import { ParticipationRoutingModule } from './participation.route';
import { ParticipationService } from './services/participation.service';
import { DoughnutChartComponent } from '../shared/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ParticipationAppComponent,
    IndexParticipationComponent,
    ListParticipationComponent,
    DoughnutChartComponent,
    NewParticipationComponent,
    DeleteParticipationComponent
  ],
  imports: [
    CommonModule,
    ParticipationRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [
    ParticipationService
  ],
  exports: [
    ParticipationAppComponent
  ]
})


export class ParticipationModule { }