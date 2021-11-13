import { Component, OnInit } from '@angular/core';
import { ToastController, ToastOptions, NavController, MenuController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BienvenidoPage } from '../bienvenido/bienvenido.page';
import { Router } from '@angular/router';
import { ApirestService } from '../apirest.service';
import { menuController } from '@ionic/core';



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
  listado = [];
  listado2 = [];
  listado3 = [];
  constructor(private toast: ToastController, public navCtrl: NavController, private Toast: ToastController, private formBuilder: FormBuilder, private router: Router, private api: ApirestService, private menu: MenuController) {
    this.menu.swipeGesture(false);
  }

  ngOnInit(){
   
    this.api.getUsers();
    this.api.getPosts();
    this.api.getComments();
    this.listado = this.api.listado;
    this.listado2 = this.api.listado2;
    this.listado3 = this.api.listado3;
    
    


    
    
  }


  get errorControl() {
    return this.registrationForm.controls;
  }

  

  registrationForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    contrasena: ['', Validators.required],
  });

  

  public submit() {
    
    let valor = this.registrationForm.get("nombre").value;
    let contrasena = this.registrationForm.get("contrasena").value;
    let filtro = this.listado.filter(listado => listado.username == valor);
    

    console.log(valor);
    let objusuario = filtro.find(listado => listado.username == valor);

    if (filtro.find(listado => listado.username == valor) && contrasena == "1234"){
      localStorage.setItem("objusuario",JSON.stringify(objusuario));
      this.router.navigate(['bienvenido',
      {nombre: this.nombre},
      ]);
      this.nombre = "";
      this.contrasena = "";
    }
    else{
      
    }
    

   
    
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

  async Showtoast() {
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
