import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordDto } from 'src/models/auth/change-password.model';
import { AuthService } from 'src/services/auth/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
 
  constructor(private authService: AuthService,
    private router: Router,
    fb: FormBuilder) {
    this.changePasswordForm = fb.group({
      email: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  changePasswordSubmit(changePasswordDto: ChangePasswordDto){
    this.authService.changePassword(changePasswordDto).subscribe();
    this.router.navigate(['/']);
  }

  backToList(){
    this.router.navigate(['/']);
  }

}
