import { ChangePasswordDto } from './../../models/auth/change-password.model';
import { CustomerDto } from './../../models/customers/customer.model';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  EmptyError,
  Observable,
  catchError,
  tap,
  EMPTY,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserType } from 'src/enums/user-type.enum';
import { CustomerProfileDto } from 'src/models/auth/customer-profile.model';
import { LoginDto } from '../../models/auth/login.model';
import { EditProfileDto } from 'src/models/auth/edit-profile.model';
import { SignupDto } from 'src/models/auth/signup.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn!: boolean;
  isAdmin!: boolean;

  private authUserSubject = new BehaviorSubject<CustomerProfileDto>(
    this.initialUser()
  );
  authUser$ = this.authUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  changePassword(
    changePasswordDto: ChangePasswordDto
  ): Observable<CustomerProfileDto> {
    return this.http
      .patch<CustomerProfileDto>(
        environment.auth.changePasswordUrl,
        changePasswordDto
      )
      .pipe(
        tap((user) => console.log({ user })),
        catchError((err) => {
          this.logError(err);
          return EMPTY;
        })
      );
  }

  login(loginDto: LoginDto): Observable<CustomerProfileDto> {
    return this.http
      .post<CustomerProfileDto>(environment.auth.loginUrl, loginDto)
      .pipe(
        tap((authUser) => {
          this.isLoggedIn = authUser.isLoggedIn!;
          this.isAdmin = authUser.userType === UserType.Admin;
          console.log({ authUser });
          localStorage.setItem('token', authUser.token!);
          this.getAuthUser$(authUser);
        }),
        catchError((err) => {
          this.logError(err);
          return EMPTY;
        })
      );
  }

  logout(user: CustomerProfileDto): void {
    this.getAuthUser$(user);
    localStorage.setItem('token', user.token!);
  }

  editProfile(editProfileDto: EditProfileDto): Observable<CustomerProfileDto> {
    return this.http
      .patch<CustomerProfileDto>(
        environment.auth.editProfileUrl,
        editProfileDto
      )
      .pipe(
        tap((user) => console.log({ user })),
        catchError((err) => {
          this.logError(err);
          return EMPTY;
        })
      );
  }

  getAuthUser$(authUser: CustomerProfileDto) {
    this.authUserSubject.next(authUser);
  }

  getCustomerCredentials(): Observable<CustomerProfileDto> {
    return this.http.get<CustomerProfileDto>(
      environment.auth.userCredentialsUrl
    );
  }

  getCurrentUser(): Observable<CustomerDto> {
    return this.http.get<CustomerDto>(environment.currentUserUrl);
  }

  getJwtToken(): string {
    return localStorage.getItem('token')!;
  }

  signup(signupDto: SignupDto): Observable<CustomerProfileDto> {
    return this.http
      .post<CustomerProfileDto>(environment.auth.signupUrl, signupDto)
      .pipe(
        tap((user) => console.log({ user })),
        catchError((err) => {
          this.logError(err);
          return EMPTY;
        })
      );
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

  logError(err: any) {
    console.log(err.message);
  }
}
