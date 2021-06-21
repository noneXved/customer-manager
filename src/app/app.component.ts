import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name.toUpperCase() }}</h1>
    <img [src]="photoUrl"/>
    `,
  styles: []
})
export class AppComponent {
  name: string = "Jan Kowalski";
  photoUrl: string = "assets/images/wallpaperzipper.jpg";
  constructor() {
    setTimeout(() =>{
      this.name = "Michał";
    }, 3000);
  }

}
