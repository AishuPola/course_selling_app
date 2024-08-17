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
  chechAuth() {
    return fetch(`http://localhost:4000/admin/always`).then((res) =>
      res.json()
    );
  }
}
