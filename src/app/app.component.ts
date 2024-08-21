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
  private intervalId: any;

  constructor(
    private service: AdminService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {
    this.clearInterval();
  }

  checkAuth() {
    // this.service.checkAuth().then((res: any) => {
    //   setUser.userEmail = res.username.id;
    //   this.user = setUser.userEmail;
    // });
    // this.startInterval();
  }
  startInterval(): void {
    // this.intervalId = setInterval(() => {
    //   this.service.checkAuth().then((res: any) => {
    //     setUser.userEmail = res.username.id;
    //     this.user = setUser.userEmail;
    //   });
    // }, 5000); // Interval time in milliseconds
  }
  logout() {
    localStorage.setItem('token', '');
    setUser.userEmail = null;
    this.user = setUser.userEmail;
    this.router.navigate(['/']);
  }
  clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
