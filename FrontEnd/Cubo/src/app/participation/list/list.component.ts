import { Component, OnInit } from '@angular/core';
import { Participation } from '../models/participation';
import { ParticipationService } from '../service/participation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  public participations: Participation[];
  errorMessage: string;

  constructor(private participationService: ParticipationService) { }

  ngOnInit(): void {
    this.participationService.getAll()
      .subscribe(
        participations => this.participations = participations,
        error => this.errorMessage);
  }
}
