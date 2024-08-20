import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-adminprofile',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatIconButton, FormsModule],
  templateUrl: './adminprofile.component.html',
  styleUrl: './adminprofile.component.scss',
})
export class AdminprofileComponent {
  select: boolean = false;
  courseData: any;
  image: string = '';
  coursename: string = '';
  description: string = '';
  price: string = '';
  constructor(
    private router: Router,
    private adminService: AdminService,
    private service: UserService
  ) {}
  ngOnInit() {
    this.adminService.checkAuth().then((resp: any) => {
      this.service.getCourses().then((res) => {
        this.courseData = res.filter(
          (resk: any) => resk.username === resp.username.id
        );
        this.courseData.map((resk: any) => (resk.select = false));
        console.log(this.courseData);
      });
    });
  }

  deleteCourse(value: any) {
    this.adminService.deleteCourse(value).then((res: any) => {
      this.adminService.checkAuth().then((resp: any) => {
        this.service.getCourses().then((res) => {
          this.courseData = res.filter(
            (resk: any) => resk.username === resp.username.id
          );
          console.log(this.courseData);
        });
      });
    });
  }
  editCourse(value: any) {
    this.courseData.map((res: any) => {
      if (value === res.coursename) {
        res.select = true;
        this.image = res.imageurl;
        this.coursename = res.coursename;
        this.description = res.description;
        this.price = res.price;
      }
    });
  }
  submitEdit() {
    let body = [
      {
        imageurl: this.image,
        coursename: this.coursename,
        description: this.description,
        price: this.price,
      },
    ];
    this.adminService.editCourse(body).then((res) => console.log(res));
  }
  cancelEdit() {
    this.courseData.map((res: any) => (res.select = false));
  }

  addcourses() {
    this.router.navigate(['addcourses']);
  }
}
