import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginDto } from 'src/models/auth/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Input()loginForm: FormGroup;
  @Output() onLoginSubmit = new EventEmitter<LoginDto>();
  @Output() onBackToList = new EventEmitter<void>();


  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

   loginSubmit(){
    this.onLoginSubmit.emit(this.loginForm.value)
   }

   backToList(){
    this.onBackToList.emit();
   }

}
