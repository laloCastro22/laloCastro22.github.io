import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  lista: any[] = [];
  linkVideo: SafeResourceUrl = this.sanea.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/');

  constructor(private servicio: ServicioService, private sanea: DomSanitizer) { }

  ngOnInit(): void {
    this.servicio.getBusqueda().subscribe((list:any[]) => {
      this.lista = list;
      this.videoId(list[0].snippet.resourceId.videoId);
      this.imprime(list);
    });
  }

  imprime(list: any) {
    
    console.log(list);
    console.log('esta es la variable '+this.lista)
  }
 
  videoId(idVideo:string){
    console.log(idVideo);
    this.linkVideo = this.sanea.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + idVideo +'?autoplay=1');
    console.log(this.linkVideo);
    
  }
}
