
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Capability-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) { }

    loggedIn(): Observable<boolean> {
        console.log('check logged in');
        return this.http
            .get<any>(`${environment.apiUrl}/validatetoken`)
            .map(res => res.success);
    }
    getclientId(): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/getclientid/`);
    }
}
