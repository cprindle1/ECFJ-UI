import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
    private onDestroy$: Subject<void> = new Subject<void>();
    constructor(
        private router: Router,
        private authService: AuthService
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
        if (this.GetParam('code') !== 0) {
        } else {
            this.authService.getclientId().subscribe(res => {
                console.log(res);
            });
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
