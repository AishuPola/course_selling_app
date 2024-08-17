import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-addcourses',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './addcourses.component.html',
  styleUrl: './addcourses.component.scss',
})
export class AddcoursesComponent {
  addCourseForm: FormGroup;
  constructor(
    public Service: AdminService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // formGroup -> formControlName
    this.addCourseForm = this.fb.group({
      coursename: ['', [Validators.required, Validators.minLength(2)]],
      description: '',
      imageurl: '',
      price: ['', [Validators.required]],
    });
  }

  addCourse() {
    console.log(this.addCourseForm.value);
    // Todo: Fix Add - Technical Debt

    this.onSubmit();
  }
  onSubmit() {
    this.Service.addcourse(this.addCourseForm.value).then((res: any) => {
      console.log(res);
      if (res) {
        this.router.navigate(['adminprofile']);
      }
    });
  }

  // getter
  get coursename() {
    return this.addCourseForm.get('coursename');
  }

  get price() {
    return this.addCourseForm.get('price');
  }
}
