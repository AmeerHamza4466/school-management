import { Routes } from '@angular/router';
import { SigninComponent } from './forms/signin/signin.component';
import { SignupComponent } from './forms/signup/signup.component';
import { ForgotPasswordComponent } from './forms/forgot-password/forgot-password.component';
import path from 'path';
import { NewPAsswordComponent } from './forms/new-password/new-password.component';
import { ResetPasswordComponent } from './forms/reset-password/reset-password.component';

export const routes: Routes = [
    {
        path: '',
        component:SigninComponent,
    }
    ,
    {
        path: 'signup',
        component: SignupComponent
    }
    ,
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }
    ,
    {
        path: 'new-password',
        component: NewPAsswordComponent
    }
    ,
    {
        path:'reset-password',
        component: ResetPasswordComponent
    }

];
