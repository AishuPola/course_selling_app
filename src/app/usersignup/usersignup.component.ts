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
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.scss',
})
export class UsersignupComponent {
  signupForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      Adminname: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
  }

  get Adminname() {
    return this.signupForm.get('Adminname');
  }

  signup() {
    this.userService.signup(this.signupForm.value).then((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['viewCourses']);
    });
  }
}
