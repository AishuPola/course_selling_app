import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { CoursesComponent } from './courses/courses.component';

import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserhomeComponent,
  },
  {
    path: 'admin/signup',
    component: SignupComponent,
  },

  {
    path: 'adminprofile',
    component: AdminprofileComponent,
  },
  {
    path: 'addcourses',
    component: AddcoursesComponent,
  },
  {
    path: 'user/signup',
    component: UsersignupComponent,
  },

  {
    path: 'viewCourses',
    component: CoursesComponent,
  },
  {
    path: 'viewCourses/:id',
    component: CoursedetailsComponent,
  },
];
