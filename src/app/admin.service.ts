import { Injectable } from '@angular/core';
export interface User {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}
  signup(credentials: User): Promise<any> {
    return fetch(`http://localhost:4000/admin/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  login(credentials: User): Promise<any> {
    return fetch(`http://localhost:4000/admin/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  addcourse(credentials: any) {
    return fetch(`http://localhost:4000/admin/addcourse`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  checkAuth() {
    return fetch(`http://localhost:4000/admin/always`, {
      method: 'GET',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
      },
    }).then((res) => res.json());
  }
  deleteCourse(id: any) {
    return fetch(`http://localhost:4000/admin/course/${id}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
  getCourse(id: any) {
    return fetch(`http://localhost:4000/admin/course/${id}`, {
      method: 'GET',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
      },
    }).then((res) => res.json());
  }
  editCourse(value: any) {
    console.log(value[0]);
    return fetch(`http://localhost:4000/admin/course/${value[0].coursename}`, {
      method: 'PUT',
      body: JSON.stringify(value),
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
