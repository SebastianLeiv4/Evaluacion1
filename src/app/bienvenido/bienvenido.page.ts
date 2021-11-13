import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';
import { Router } from '@angular/router';
import { menuController } from '@ionic/core';
import { MenuController } from '@ionic/angular';


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
  
  
  constructor(private route: ActivatedRoute, private api: ApirestService, private router: Router, private menu: MenuController) {

   this.usuario = this.route.snapshot.paramMap.get('nombre');
   this.menu.swipeGesture(false);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


  listarPosts(){

    

    this.listado = this.api.listado;

    let objusuario =  JSON.parse(localStorage.getItem('objusuario'));
    
    this.listado2 = this.api.listado2;
    
    this.postsUsuario = this.listado2.filter(post => post['userId'] == objusuario["id"]);
    
    

  }

  BorrarStorage(){
    
    this.menu.enable(false, 'first');
    this.menu.close('first');

    this.router.navigate(['home']);

    localStorage.clear();
  }

  IrAComentarios(post: any){
    let TotalPosts = this.postsUsuario;
    
    this.router.navigate(['comentarios', post['id'] ]);
  }
  
  ngOnInit() {

    this.listarPosts();

    

  }

  

}
