import { Injectable } from '@angular/core';
export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  signup(credentials: User): Promise<any> {
    return fetch(`http://localhost:4000/user/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  login(credentials: User): Promise<any> {
    return fetch(`http://localhost:4000/user/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  getCourses(): Promise<any> {
    return fetch(`http://localhost:4000/user/courses`, {
      method: 'GET',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
      },
    }).then((res) => res.json());
  }
}
