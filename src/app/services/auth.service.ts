import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Capability-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    data: Observable<any>;
    success: any = null;
    constructor(private http: HttpClient) { }

    getclientId(): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/getClientId`);
    }
}
