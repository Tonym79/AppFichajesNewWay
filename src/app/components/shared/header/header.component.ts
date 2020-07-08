import { Component, OnInit } from '@angular/core';
import { HeaderVar, Mensaje } from '../models/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
mensajes: any[];
mensaje: Mensaje;
headerVar: HeaderVar = {
  numeroMensajes: 0,
  numeroNotificaciones: 0,
  numeroFichajes: 0,
  numeroTareas: 0,
  nombreUser: 'Antonio Martínez',
  cargoUser: 'Director',
  imagenUser: 'assets/dist/img/user2-160x160.jpg'

}
  constructor() { }

  ngOnInit(): void {
    var mensajes = [];
    this.mensaje={
      remitente: 'Antonio Martínez',
      imagenRemitente: 'assets/dist/img/user2-160x160.jpg',
      fecha: new Date(2020, 6, 29, 17, 23, 42, 11),

      mensaje: 'Este mensaje es sólo una prueba',
    }
    mensajes.push(this.mensaje);
    this.mensaje={
      remitente: 'Jesús Martínez',
      imagenRemitente: 'assets/dist/img/user2-160x160.jpg',
      fecha: new Date(2020, 7, 4, 18, 19, 42, 11),

      mensaje: 'Este mensaje es otra una prueba',
    }
    mensajes.push(this.mensaje);
    this.mensajes = mensajes;
    this.headerVar.numeroMensajes = this.mensajes.length;

  }
  // función para calcular tiempo trascurrido desde el mensaje
prueba(fecha: Date){
  var ahora = new Date();
  console.log((fecha.getTime()-ahora.getTime())/60);
return fecha

}
}
