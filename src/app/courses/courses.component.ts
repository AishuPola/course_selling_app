import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    MatIconModule,
    MatIconButton,
    RouterOutlet,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courseData: any;
  id!: string;
  search: any;
  filteredData: any;
  constructor(private service: UserService, private router: Router) {}
  ngOnInit() {
    this.service.getCourses().then((res) => {
      this.courseData = res;
      this.filteredData = this.courseData;
      console.log(this.courseData);
    });
  }
  searchCourse() {
    this.service.getCourses().then((res) => {
      this.courseData = res;
      if (this.search) {
        this.filteredData = this.courseData.filter(
          (resk: any) =>
            resk.coursename.toLowerCase() === this.search.toLowerCase()
        );
      } else {
        this.filteredData = this.courseData;
      }
    });
  }
  show = true;

  toggleSummary() {
    this.show = !this.show;
  }
}
