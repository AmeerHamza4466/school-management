import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPAsswordComponent } from './new-password/new-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupComponent,
    SigninComponent,
    ForgotPasswordComponent,
    NewPAsswordComponent,
    ResetPasswordComponent
  ]
})
export class FormsModule { }
