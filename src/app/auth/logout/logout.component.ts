import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/enums/user-type.enum';
import { CustomerProfileDto } from 'src/models/auth/customer-profile.model';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  deleteMessage = `Do you want to logout?`;
  deleteTitle = 'Logout Confirmation!';
  showDeleteItem = true;

  constructor(private router: Router, private authService: AuthService) {}
  isLoggedIn!: boolean;
  isAdmin!: boolean;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isAdmin = this.authService.isAdmin;
  }

  logoutClick() {
    this.deleteMessage = `Do you want to delete logout!?`;
    this.deleteTitle = 'Logout Confirmation!';
    this.showDeleteItem = !this.showDeleteItem;
  }

  logout(value: boolean) {
    if (value) {
      localStorage.removeItem('token')
      this.router.navigate(['/home']);
      this.authService.getAuthUser$(this.initialUser())
    } else {
      //this.showDeleteItem = !this.showDeleteItem;
      this.router.navigate(['/']);
    }
  }

  initialUser(): CustomerProfileDto {
    return {
      id: '',
      name: '',
      userType: UserType.Customer,
      token: '',
      isLoggedIn: false,
      message: 'You are not logged in.',
    };
  }
}
