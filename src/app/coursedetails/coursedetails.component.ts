import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.scss',
})
export class CoursedetailsComponent {
  course!: any;
  trustedUrl!: SafeUrl;
  isLoading: boolean = true;
  msg = '';
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.courseService
      .getCourseByIdP(id)
      .then((data) => {
        console.log(data);
        this.course = data; // Model
        this.isLoading = false;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.course.video
        );
      })
      .catch((err) => {
        this.isLoading = false;
        this.msg = err || 'Something went wrong 🥲';
      });
  }
}
