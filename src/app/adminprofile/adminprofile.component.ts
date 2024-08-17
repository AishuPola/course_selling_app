import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './adminprofile.component.html',
  styleUrl: './adminprofile.component.scss',
})
export class AdminprofileComponent {
  constructor(private router: Router) {}
  addcourses() {
    this.router.navigate(['addcourses']);
  }
}
