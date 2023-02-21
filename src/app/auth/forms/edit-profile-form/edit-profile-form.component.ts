import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditProfileDto } from 'src/models/auth/edit-profile.model';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css'],
})
export class EditProfileFormComponent {
  @Input() editProfileForm: FormGroup;
  @Output() onEditProfile = new EventEmitter<EditProfileDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.editProfileForm = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  editProfileSubmit(){
    this.onEditProfile.emit(this.editProfileForm.value);
  }

  backToList(){
    this.onBackToList.emit();
  }
}
