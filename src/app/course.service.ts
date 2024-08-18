import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private router: Router) {}

  getCourseByIdP(id: string): Promise<any> {
    return fetch(`http://localhost:4000/user/courses/${id}`, {
      method: 'GET',
      // headers: {
      //   'x-auth-token': localStorage.getItem('token') as string,
      // },
    }).then((res) => {
      if (res.status != 200) {
        this.router.navigate(['/login']);
        throw new Error('Not Authorized');
      }

      return res.json();
    });
  }
}
