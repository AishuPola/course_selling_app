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
  selector: 'app-userhome',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.scss',
})
export class UserhomeComponent {
  warning: boolean = false;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      Adminname: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
  }

  get Adminname() {
    return this.loginForm.get('username');
  }

  login() {
    console.log(this.loginForm.value);
    this.adminService.login(this.loginForm.value).then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.adminService.checkAuth().then((res: any) => {
          setUser.userEmail = res.username.id;
        });
        this.router.navigate(['/viewCourses']);
      } else {
        this.warning = true;
      }
    });
  }
}
