import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { apiHost } from '../common/const';
import { AuthService } from './auth.service';
import { ResponeModel } from '../models/shared/respone.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ApiService {

    // private _authService: AuthService;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.authService.authorizationHeaderValue
        })
    };

    constructor(private http: HttpClient,
        private authService: AuthService) {
            // this._authService = this.authService;
    }

    get(path: string, params?: HttpParams): Observable<ResponeModel> {
        return this.http.get<ResponeModel>(`${apiHost}/${path}`, {
            params: params,
            headers: this.httpOptions.headers
        }).pipe(catchError(this.handleError));
    }

    post(path: string, data?: any, params?: HttpParams): Observable<ResponeModel> {
        return this.http.post<ResponeModel>(
            `${apiHost}/${path}`,
            data,
            {
                params: params,
                headers: this.httpOptions.headers
            }
        );
    }

    put(path: string, data?: any): Observable<ResponeModel> {
        return this.http.put<ResponeModel>(
            `${apiHost}/${path}`,
            data,
            {
                headers: this.httpOptions.headers
            }
        );
    }

    delete(path: string, params?: HttpParams): Observable<ResponeModel> {
        return this.http.delete<ResponeModel>(`${apiHost}/${path}`, {
            params: params,
            headers: this.httpOptions.headers
        });
    }

    handleError(error: HttpErrorResponse) {
        console.log(error);
        if (error.status === 401) {
            // this._authService.login();
        }
        return throwError(error);
    }
}

