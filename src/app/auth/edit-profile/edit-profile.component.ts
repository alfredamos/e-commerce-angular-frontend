import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EditProfileDto } from 'src/models/auth/edit-profile.model';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.editProfileForm = fb.group({
      name: [''],
      email: [''],
      password: [''],
      newPassword: [''],
      phone: [''],
      gender: [''],
    });
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      console.log({ currentUser: user });
      this.editProfileForm.patchValue({
        ...user,
        password: '',
        newPassword: '',
      });
    });
  }

  editProfileSubmit(editProfileDto: EditProfileDto) {
    this.authService
      .editProfile(editProfileDto)
      .subscribe((authUser) => this.router.navigate(['/']));
  }

  backToList() {
    this.router.navigate(['/']);
  }
}
