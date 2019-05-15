import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class ProductosService {

  constructor(private http: Http) { }

  obtenerProductos(){
    return this.http.get("https://productos-86a49.firebaseio.com/.json")
      .map((res: Response) => res.json());
  }

  obtenerProductoPorId(id:number){
    return this.http.get("https://productos-86a49.firebaseio.com/" + (id - 1) + "/.json")
      .map((res: Response) => res.json());
  }
}
