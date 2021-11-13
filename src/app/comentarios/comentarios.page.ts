import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  TotalComentarios = [];
  listado3 = [];
  idPost: number;
  constructor(private api:ApirestService, private route: ActivatedRoute) {
     this.route.params.subscribe(params => {
      this.idPost = params['id']; 
 });
    
   }

  ngOnInit() {

    this.listado3 = this.api.listado3;
    
    
    this.listado3 = this.listado3.filter(comentario => comentario['postId'] == this.idPost);
    console.log(this.listado3);
    
    this.TotalComentarios = this.listado3;
    console.log(this.TotalComentarios);
    
    
    /*let ObjPosts = JSON.parse(localStorage.getItem('TotalPosts'));
    this.listado3 = this.api.listado3;
    console.log(this.listado3);
   
    this.TotalComentarios = this.listado3.filter(post => post['postId'] == ObjPosts["id"])
    console.log(this.TotalComentarios);*/
  }

}
