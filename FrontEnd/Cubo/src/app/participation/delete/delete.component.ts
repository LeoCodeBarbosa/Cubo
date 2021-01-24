import { Component, Input } from '@angular/core';
import { ParticipationService } from '../services/participation.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-participation-delete',
    templateUrl: './delete.component.html'
})
export class DeleteParticipationComponent {

    @Input() id: string;

    constructor(private participationService: ParticipationService,
        private toastr: ToastrService) {
    }

    public deleteParticipation() {
        console.log(this.id);
        this.participationService.deleteParticipation(this.id)
            .subscribe(
                evento => { location.reload(); },
                error => {
                    this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
                    console.log(error);
                }
            );
    }
}

