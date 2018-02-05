import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
  
})
export class AppComponent {
  title = 'app';
  menuState:string = 'close';
  toggleMenu() {
    this.menuState = this.menuState === 'close' ? 'open' : 'close';
  }

  toggleEmiter(){
   console.log("toggle");
    this.toggleMenu();
  }

}
