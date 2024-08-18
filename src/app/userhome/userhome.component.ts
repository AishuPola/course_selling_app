import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.scss',
})
export class UserhomeComponent {}
