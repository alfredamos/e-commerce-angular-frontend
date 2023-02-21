import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordFormComponent } from './forms/change-password-form/change-password-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { EditProfileFormComponent } from './forms/edit-profile-form/edit-profile-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { NotAllowedPageComponent } from './not-allowed-page/not-allowed-page.component';
import { MustLogginPageComponent } from './must-loggin-page/must-loggin-page.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    LoginComponent,
    EditProfileComponent,
    SignupComponent,
    ChangePasswordFormComponent,
    LoginFormComponent,
    EditProfileFormComponent,
    SignupFormComponent,
    NotAllowedPageComponent,
    MustLogginPageComponent,
    LogoutComponent,
    HomeComponent,
  ],
  imports: [SharedModule],
})
export class AuthModule {}
