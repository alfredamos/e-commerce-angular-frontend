import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangePasswordDto } from 'src/models/auth/change-password.model';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordFormComponent {
  @Input() changePasswordForm: FormGroup;
  @Output() onChangePassword = new EventEmitter<ChangePasswordDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.changePasswordForm = fb.group({
      email: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  changePasswordSubmit() {
    this.onChangePassword.emit(this.changePasswordForm.value);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
