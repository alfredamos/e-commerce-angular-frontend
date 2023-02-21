import { Component} from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupDto } from 'src/models/auth/signup.model';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.signupForm = fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phone: [''],
      gender: [''],
    });
  }

  signupSubmit(signupDto: SignupDto){
    this.authService
      .signup(signupDto)
      .subscribe((authUser) => this.router.navigate(['/']));
  }

  backToList(){
    this.router.navigate(['/']);
  }
}
