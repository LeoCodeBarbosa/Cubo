import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from 'src/app/shared/services/base.service';
import { User } from '../models/user';

@Injectable()
export class AuthService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    login(user: User): Observable<User> {
        let response = this.http
            .post(this.UrlServiceV1 + 'login', user, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }
}