import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courseData: any;
  constructor(private service: UserService) {}
  ngOnInit() {
    this.service.getCourses().then((res) => {
      this.courseData = res;
      console.log(this.courseData);
    });
  }
}
