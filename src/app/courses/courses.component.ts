import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatCardModule, RouterLink, MatIcon],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courseData: any;
  id!: string;
  constructor(private service: UserService) {}
  ngOnInit() {
    this.service.getCourses().then((res) => {
      this.courseData = res;
      console.log(this.courseData);
    });
  }
}
