import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Participation } from '../models/participation';
import { ParticipationService } from '../services/participation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-participation-list',
  templateUrl: './list.component.html'
})
export class ListParticipationComponent implements AfterViewInit {

  public participationDataSource: MatTableDataSource<Participation>;
  displayedColumns: string[] = ['firstName', 'lastName', 'value', 'id'];
  errorMessage: string;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private participationService: ParticipationService) { }

  ngAfterViewInit() {
    this.participationService.getAll()
      .subscribe(
        participations => {
          this.participationDataSource = new MatTableDataSource<Participation>(participations);
          this.participationDataSource.paginator = this.paginator;
        },
        error => this.errorMessage);
  }
}
