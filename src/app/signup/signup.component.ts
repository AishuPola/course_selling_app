import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
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

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
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
    console.log(this.signupForm.value);
    this.adminService.signup(this.signupForm.value).then((data) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['addcourses']);
    });
  }
}
