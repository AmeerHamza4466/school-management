import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignupComponent } from './forms/signup/signup.component';
import { SigninComponent } from './forms/signin/signin.component';
import { ForgotPasswordComponent } from './forms/forgot-password/forgot-password.component';
import { NewPAsswordComponent } from './forms/new-password/new-password.component';
import { ResetPasswordComponent } from './forms/reset-password/reset-password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    FormsModule,
    SignupComponent,
    SigninComponent,
    ForgotPasswordComponent,
    NewPAsswordComponent,
    ResetPasswordComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'School-Management';
}
