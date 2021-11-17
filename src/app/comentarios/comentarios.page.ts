import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';
import { menuController } from '@ionic/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  TotalComentarios = [];
  listado3 = [];
  idPost: number;
  constructor(private api:ApirestService, private route: ActivatedRoute, private menu:MenuController) {
     this.route.params.subscribe(params => {
      this.idPost = params['id']; 
 });
    
   }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {

    this.listado3 = this.api.listado3;
    
    
    this.listado3 = this.listado3.filter(comentario => comentario['postId'] == this.idPost);
    console.log(this.listado3);
    
    this.TotalComentarios = this.listado3;
    console.log(this.TotalComentarios);
    
    localStorage.setItem("TotalComentarios",JSON.stringify(this.TotalComentarios));
    
  }

}
