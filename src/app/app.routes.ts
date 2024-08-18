import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { CoursesComponent } from './courses/courses.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'signuporlogin',
    component: HomeComponent,
  },
  {
    path: 'signuporlogin/signup',
    component: SignupComponent,
  },
  {
    path: 'signuporlogin/login',
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
    path: 'user/login',
    component: UserloginComponent,
  },
  {
    path: 'viewCourses',
    component: CoursesComponent,
  },
];
