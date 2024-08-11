import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addcourses',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addcourses.component.html',
  styleUrl: './addcourses.component.scss',
})
export class AddcoursesComponent {
  coursename!: string;
  description!: string;
}
