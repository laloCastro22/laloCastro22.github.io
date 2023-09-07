import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  id:string = '';
    
  constructor (private servicio:ServicioService){}

  ngOnInit(): void {}

  buscaPlayList():void{
    if(this.id.length !== 0){
      this.servicio.getPlayList(this.id).subscribe(list =>{
        this.servicio.setBusqueda(list);
        console.log("error"+list)
      });
    }else{
      window.alert('Ingresa un ID :D!')
    }
  }
  

  
}
