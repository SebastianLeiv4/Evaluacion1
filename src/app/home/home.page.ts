import { Component, OnInit } from '@angular/core';
import { ToastController, ToastOptions, NavController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})



export class HomePage{

  //nombre : "juan";
  //contraseña : 1234;

  toastOptions: ToastOptions
  constructor(private toast: ToastController, public navCtrl: NavController, private Toast: ToastController) {  }

  /*verificar(Nombre: HTMLInputElement, Contraseña: HTMLInputElement){

    if (Nombre.value = this.nombre){

      console.log("hola")
    }

  }*/

  
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

  async ShowToast() {
    const Toast = await this.Toast.create({
      message: 'Su cuenta se ha creado!.',
      duration: 2000,
      position: "top",
      animated: true,
      cssClass: 'my-custom-class',
      
    });
    Toast.present();
  }

}
