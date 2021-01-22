import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet } from 'ng2-charts';
import { ParticipationService } from 'src/app/participation/service/participation.service';

interface IDataset {
  data: SingleDataSet,
  label: Array<string>
}

interface IChartData {
  doughnutchartData: Array<IDataset>;
  labels: Label;
  doughnutChartOptions: ChartOptions;
}

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLegend = true;
  public doughnutChartPlugins = [];
  public baseOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'right' }
  };
  public chartData: IChartData;
  errorMessage: string;

  constructor(private participationService: ParticipationService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.participationService.getAll()
      .subscribe(
        participations => {
          let objchart = { data: [], label: []};
          participations.map((data,index) =>  { 
            objchart.data.push(data.value);
            objchart.label.push(data.firstName);
           });
          this.chartData = {
            doughnutchartData: [{
              data: objchart.data,
              label: objchart.label
            }],
            labels: objchart.label,
            doughnutChartOptions: {
              ...this.baseOptions,
              title: {
                ...this.baseOptions.title,
                text: 'dados do gráfico'
              } 
            }                         
          }     
        },
        error => this.errorMessage);
  }
}

