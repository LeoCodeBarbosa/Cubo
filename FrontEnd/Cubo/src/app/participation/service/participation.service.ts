import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/shared/services/base.service';
import { Participation } from '../models/participation';

@Injectable()
export class ParticipationService extends BaseService {

    constructor(private http: HttpClient) { super() }

    getAll(): Observable<Participation[]> {
        return this.http
            .get<Participation[]>(this.UrlServiceV1 + "participation", super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    getAllNew(): Observable<Participation[]> {
        return this.http
            .get<Participation[]>(this.UrlServiceV1 + "participation", super.ObterHeaderJson())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }
}