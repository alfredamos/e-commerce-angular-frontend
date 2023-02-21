import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/enums/user-type.enum';
import { CustomerProfileDto } from 'src/models/auth/customer-profile.model';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
 
  authUser$ = this.authService.authUser$;

  constructor(private authService: AuthService) {}
  
}
