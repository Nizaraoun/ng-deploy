import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  private signUpButton!: HTMLElement;
  private signInButton!: HTMLElement;
  private container!: HTMLElement;

  ngOnInit(): void {
    this.signUpButton = document.getElementById('signUp') as HTMLElement;
    this.signInButton = document.getElementById('signIn') as HTMLElement;
    this.container = document.getElementById('container') as HTMLElement;

    this.signUpButton.addEventListener('click', () => {
      this.container.classList.add('right-panel-active');
    });

    this.signInButton.addEventListener('click', () => {
      this.container.classList.remove('right-panel-active');
    });
  }
}
