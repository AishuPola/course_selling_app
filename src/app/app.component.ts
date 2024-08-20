import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminService } from './admin.service';
import { setUser } from './global';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  user: any;

  constructor(
    private service: AdminService,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.checkAuth();
  }

  checkAuth() {
    this.service.checkAuth().then((res: any) => {
      setUser.userEmail = res.username.id;
      this.user = setUser.userEmail;
    });
    setInterval(() => {
      this.service.checkAuth().then((res: any) => {
        setUser.userEmail = res.username.id;
        this.user = setUser.userEmail;
      });
    }, 1000);
  }
  logout() {
    localStorage.setItem('token', '');
    setUser.userEmail = null;
    this.user = setUser.userEmail;
    this.router.navigate(['/']);
  }
}
