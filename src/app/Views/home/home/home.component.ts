import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  onImageClick(route: string): void {
    // Navigate to a specific route when the image is clicked
    console.log(`Image Clicked with parameter: ${route}`);
    this.router.navigate([`/${route}`]);
  }
  tiles1 = [
    {text: 'game1'},
    {text: 'game2'},
    {text: 'game3'},
    {text: 'game4'},
    {text: 'game5'},
   
  ];

  tiles2 = [
    {text: 'souris'},
    {text: 'laptop2'},
    {text: 'ps5'},
    {text: 'casque2'},
    {text: 'Oculus'},
    {text: 'xbox'},
  ];
  tiles3 = [
    {text: 'lol'},
    {text: 'gtacity'},
    {text: 'cs'},
    {text: 'red'},
    {text: 'Euro'},
    {text: 'Geralt'},
    {text: 'rust'},
    {text: 'valorant'},
  ];
 
}
