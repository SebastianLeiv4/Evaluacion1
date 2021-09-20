import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  
  usuario: string;
  
  constructor(private route: ActivatedRoute) {

   this.usuario = this.route.snapshot.paramMap.get('nombre');
  }

  

  
  ngOnInit() {

  }



}
