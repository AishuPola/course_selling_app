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
  search: any;
  filteredData: any;
  delete: string = '';

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
        this.filteredData = this.courseData;
        console.log(this.courseData);
      });
    });
  }
  searchCourse() {
    this.adminService.checkAuth().then((resp: any) => {
      this.service.getCourses().then((res) => {
        this.courseData = res.filter(
          (resk: any) => resk.username === resp.username.id
        );
        this.courseData.map((resk: any) => (resk.select = false));
        if (this.search) {
          this.filteredData = this.courseData.filter(
            (resk: any) =>
              resk.coursename.toLowerCase() === this.search.toLowerCase()
          );
        } else {
          this.filteredData = this.courseData;
        }
      });
    });
  }
  noAction() {
    this.delete = '';
  }

  deletedCourse(value: any) {
    this.delete = value;
  }

  deleteCourse() {
    this.adminService.deleteCourse(this.delete).then((res: any) => {
      this.adminService.checkAuth().then((resp: any) => {
        this.service.getCourses().then((res) => {
          this.courseData = res.filter(
            (resk: any) => resk.username === resp.username.id
          );
          this.delete = '';
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
        coursename: this.coursename,
        username: this.courseData[0].username,
        price: this.price,
        description: this.description,
        imageurl: this.image,
      },
    ];
    this.adminService.editCourse(body).then((res) => {
      this.adminService.checkAuth().then((resp: any) => {
        this.service.getCourses().then((response) => {
          this.courseData = response.filter(
            (resk: any) => resk.username === resp.username.id
          );
          this.courseData.map((resk: any) => (resk.select = false));
          this.filteredData = this.courseData;
        });
      });
    });
  }
  cancelEdit() {
    this.courseData.map((res: any) => (res.select = false));
  }

  addcourses() {
    this.router.navigate(['addcourses']);
  }
}
