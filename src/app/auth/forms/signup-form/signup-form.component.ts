import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupDto } from 'src/models/auth/signup.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  @Input()signupForm: FormGroup;
  @Output() onSignupSubmit = new EventEmitter<SignupDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  signupSubmit() {
    this.onSignupSubmit.emit(this.signupForm.value);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
