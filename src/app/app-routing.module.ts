import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
