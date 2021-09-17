import { Component, OnInit } from '@angular/core';
import { ToastController, ToastOptions, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  toastOptions: ToastOptions
  constructor(private toast: ToastController, public navCtrl: NavController) {



  }

  
  async showToast() {
    const toast = await this.toast.create({
      message: 'Su contraseña se ha cambiado!.',
      duration: 2000,
      position: "top",
      animated: true,
      cssClass: 'my-custom-class',
      
    });
    toast.present();
  }

}
