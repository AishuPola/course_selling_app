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
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminService } from '../admin.service';
import { setUser } from '../global';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  warning: boolean = false;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
  }

  get Adminname() {
    return this.loginForm.get('username');
  }

  login() {
    console.log(this.loginForm.value);
    this.adminService.login(this.loginForm.value).then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', this.loginForm.value.username);
        localStorage.setItem('roleId', data.roleId);
        this.router.navigate(['/adminprofile']);
      } else {
        this.warning = true;
      }
    });
  }
}
