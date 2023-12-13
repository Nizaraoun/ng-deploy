import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontlayout',
  templateUrl: './frontlayout.component.html',
  styleUrls: ['./frontlayout.component.css']
})
export class FrontlayoutComponent {
  constructor(private router: Router) {}

  Login(): void {
    // Navigate to a specific route when the image is clicked
    this.router.navigate(['/auth']);
  }

}
