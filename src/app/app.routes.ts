import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
];
