import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router, RouterOutlet } from '@angular/router';
import { setUser } from '../global';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup;
  password: string = '';
  warning: boolean = false;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      Adminname: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
    console.log(this.signupForm.value);
  }

  get Adminname() {
    return this.signupForm.get('Adminname');
  }

  signup() {
    if (this.password === this.signupForm.value.password) {
      this.adminService.signup(this.signupForm.value).then((data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/adminprofile']);
      });
    } else {
      this.warning = true;
    }
  }
}
