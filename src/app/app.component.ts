import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { menuController } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,private menu:MenuController) {



  }


  BorrarStorage(){
    
    this.menu.enable(false, 'first');
    this.menu.close('first');


    this.router.navigate(['home']);
    
    localStorage.clear();
  }
}
