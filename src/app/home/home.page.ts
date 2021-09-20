import { Component, OnInit } from '@angular/core';
import { ToastController, ToastOptions, NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { BienvenidoPage } from '../bienvenido/bienvenido.page';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  

export class HomePage{

  isSubmitted = false;
  toastOptions: ToastOptions
  nombre: string;
  contrasena: string;
  constructor(private toast: ToastController, public navCtrl: NavController, private Toast: ToastController, private formBuilder: FormBuilder, private router: Router) {
    this.nombre = '';
  }

  get errorControl() {
    return this.registrationForm.controls;
  }

  public errorMessages = {
    nombre: [
      { type: 'required', message: 'El nombre es requerido' },
    ],
    contrasena: [
      { type: 'required', message: 'La contraseña en requerida' },
    ],
  }

  profileForm = this.formBuilder.group({
    nombre: '',
    contrasena: ''
  });

  registrationForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    contrasena: ['', Validators.required],
  });

  public submit() {
    
    this.router.navigate(['bienvenido',
   {nombre: this.nombre},
  ])
    this.nombre = "";
    this.contrasena = "";
    
  }
  

  async showToast() {
    const toast = await this.toast.create({
      message: 'Su contraseña se ha recuperado!.',
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
