import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';

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
    path: 'login/adminprofile',
    component: AdminprofileComponent,
  },
  {
    path: 'login/adminprofile/addcourses',
    component: AddcoursesComponent,
  },
];
