import { Component, OnInit } from '@angular/core';
import { ToastController, ToastOptions, NavController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BienvenidoPage } from '../bienvenido/bienvenido.page';
import { Router } from '@angular/router';
import { ApirestService } from '../apirest.service';



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
  constructor(private toast: ToastController, public navCtrl: NavController, private Toast: ToastController, private formBuilder: FormBuilder, private router: Router, private api: ApirestService) {
    
  }

  ngOnInit(){
   
    this.api.getUsers();
    this.api.getPosts();
    this.api.getComments();
    this.listado = this.api.listado;
    this.listado2 = this.api.listado2;
    this.listado3 = this.api.listado3;
    /*let nombre2 = "Bret";
    let array = [nombre2];
    let filtro = this.listado.filter(listado => listado.username);
    if (array = filtro){
      console.log("Los datos son iguales");
    }
    else{
      console.log("los datos no son iguales o una parte no existe");
    }*/
    


    /*let nombre2 = ["Bret"];
    let filtro = this.listado.filter(listado => listado.username);
    if (nombre2 = filtro){
      console.log("Existe relación");
      console.log(filtro)
    }
    else{
      console.log("No existe relacion")
    }*/
    
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
    

    /*if (filtro.includes(valor)){
      console.log("Son iguales")
    }
    else{
      console.log("No son iguales")
    }*/

  

    
    /*let newArray = filtro.filter(function (el){
      return el.username;
    })*/
    
    
    

    /*if (array == filtro.find(filtro => filtro.username)){
      console.log("Son iguales")
    }
    else{
      console.log("No son iguales")
    }*/
    
    /*if (valor == x){
      this.router.navigate(['bienvenido',
      {nombre: this.nombre},
      ])
      this.nombre = "";
      this.contrasena = "";
    }
    else{
      console.log("No puedes ingresar")
    }*/
    
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

  /*
  obtenerPost(userId: number){

   let listaPost = this.obtenerPost(userId);

  }

  obtenerComentarios(idPost: number){
    let listaComentarios = this.listaComentarios(idPost);

  }
  */

}
