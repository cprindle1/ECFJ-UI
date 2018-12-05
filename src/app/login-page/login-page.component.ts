import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
@Component({
    selector: 'ngx-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
    private onDestroy$: Subject<void> = new Subject<void>();
    username: string;
    password: string;
    clientId: string;
    authDomain: string;
    loginActive: boolean = true;
    register: boolean = false;
    message: string;
    buttonTitle: string;
    allowReactivate: boolean = false;
    UIBaseUrl: string;
    // @Output()
    // buttonTitle: string = 'Login';

    reloadPage: boolean;

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    GetParam(name) {
        const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(
            window.location.href
        );
        if (!results) {
            return 0;
        }
        return results[1] || 0;
    }

    ngOnInit() {
        const accessCode = this.GetParam('code');
        if (accessCode !== 0) {
            console.log(accessCode);
        } else {
            console.log('no code');
            this.authService.getclientId().subscribe(res => {
                console.log(res);
                window.location.replace(res.authUrl);
            })
        }

    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
