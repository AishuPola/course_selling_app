import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatCardModule, RouterLink, MatIconModule, MatIconButton],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courseData: any;
  id!: string;

  constructor(private service: UserService, private router: Router) {}
  ngOnInit() {
    this.service.getCourses().then((res) => {
      this.courseData = res;
      console.log(this.courseData);
    });
  }
  show = true;

  toggleSummary() {
    this.show = !this.show;
  }
  // getdetails() {
  //   this.router.navigate(['viewCourses/{{ id }}']);
  // }
  deletecourse() {}
  editcourse() {}
}
