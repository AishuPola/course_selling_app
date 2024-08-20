import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.scss',
})
export class CoursedetailsComponent {
  trustedUrl!: SafeUrl;
  isLoading: boolean = true;
  msg = '';
  course: any;
  id: any;
  constructor(
    private service: AdminService,
    private courseService: CourseService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string; // From styleUrl
    this.service.getCourse(this.id).then((res) => {
      this.course = res;
      console.log(this.course);
    });
  }
}
