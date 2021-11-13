import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  
  usuario: string;
  listado = [];
  listado2 = [];
  postsUsuario = [];
  
  
  constructor(private route: ActivatedRoute, private api: ApirestService, private router: Router) {

   this.usuario = this.route.snapshot.paramMap.get('nombre');
  }

  
  listarPosts(){

    

    this.listado = this.api.listado;

    let objusuario =  JSON.parse(localStorage.getItem('objusuario'));
    
    this.listado2 = this.api.listado2;
    
    this.postsUsuario = this.listado2.filter(post => post['userId'] == objusuario["id"]);
    
    

  }

  BorrarStorage(){
    
    

    this.router.navigate(['home']);

    localStorage.clear();
  }

  IrAComentarios(post: any){
    let TotalPosts = this.postsUsuario;
    //localStorage.setItem("TotalPosts",JSON.stringify(TotalPosts));
    //this.router.navigate(['comentarios']);
    this.router.navigate(['comentarios', post['id'] ]);
  }
  
  ngOnInit() {

    this.listarPosts();

    /*this.api.getPosts();
    this.api.getUsers();

    this.listado = this.api.listado;

    let objusuario =  JSON.parse(sessionStorage.getItem('objusuario'));
    console.log(objusuario);
    this.listado2 = this.api.listado2;
    console.log(this.listado2);
    let postsUsuario = this.listado2.filter(post => post['userId'] == objusuario["id"]);
    console.log(postsUsuario);
    if(postsUsuario.length > 0){
      console.log(postsUsuario);
    }
    else{

    }*/



    /*.listado = this.api.listado;
    this.listado2 = this.api.listado2;

    let filtro = this.listado.filter(listado => listado.username == this.usuario);
    let idUsuarioListado = this.listado.filter(listado => listado.id == listado.id);
    let idUsuarioListado2 = this.listado2.filter(listado2 => listado2.userId == listado2.userId);
    let posts = this.listado2.filter(listado2 => listado2.id == listado2.id);
    
    if (filtro.find(listado => listado.username == this.usuario)){
      if (idUsuarioListado == idUsuarioListado2){
        console.log(posts);
      }
      else{
        console.log("Error con los IDs")
      }
    }
    else{
      console.log("Los datos no son iguales")
    }*/

    

    /*if (filtro.find(listado => listado.username == this.usuario)){
      console.log("Los datos son iguales")
    }
    else{
      console.log("Los datos no son iguales")
    }*/

  }

  

}
