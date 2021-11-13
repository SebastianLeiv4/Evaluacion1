import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private apiURL = "https://jsonplaceholder.typicode.com/";
  listado = [];
  listado2 = [];
  listado3 = [];

  constructor(private http: HttpClient) { }

  getUsers(){

    let url = this.apiURL + "users";
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:[]) => {
        data.forEach(item => {this.listado.push(item);})
        
      },
      err => {
        console.log("ocurrio un error");
      }
      )
    })

  }

  getPosts(){

    let url = this.apiURL + "posts";
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:[]) => {
        data.forEach(item => {this.listado2.push(item);})
        
      },
      err => {
        console.log("ocurrio un error");
      }
      )
    })

  }

  getComments(){

    let url = this.apiURL + "comments";
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:[]) => {
        data.forEach(item => {this.listado3.push(item);})
        
      },
      err => {
        console.log("ocurrio un error");
      }
      )
    })

  }

  
}
