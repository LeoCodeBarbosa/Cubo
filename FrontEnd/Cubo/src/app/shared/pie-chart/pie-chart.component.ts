import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet } from 'ng2-charts';
import { Participation } from 'src/app/participation/models/participation';
import { ParticipationService } from 'src/app/participation/service/participation.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'right' }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [[0,0]];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public participations: Participation[];
  errorMessage: string;

  constructor(private participationService: ParticipationService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.participationService.getAll()
      .subscribe(
        participations => {
          this.participations = participations;
          this.pieChartLabels = [].map.call(this.participations, function (obj) {
            return [obj.firstName];
          });
          this.pieChartData = [].map.call(this.participations, function (obj) {
            return obj.value + obj.firstName.length;
          });
        },
        error => this.errorMessage);
  }
}

