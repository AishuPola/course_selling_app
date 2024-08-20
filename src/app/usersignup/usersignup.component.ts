import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { setUser } from '../global';

@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.scss',
})
export class UsersignupComponent {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private adminService: AdminService
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
  }

  get username() {
    return this.signupForm.get('username');
  }

  signup() {
    this.userService.signup(this.signupForm.value).then((data: any) => {
      localStorage.setItem('token', data.token);
      this.adminService.checkAuth().then((res: any) => {
        setUser.userEmail = res.username.id;
      });
      this.router.navigate(['viewCourses']);
    });
  }
}
