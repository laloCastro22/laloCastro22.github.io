import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpErrorResponse } from '@angular/common/http'
import { catchError,map } from 'rxjs/operators'
import { BehaviorSubject,Observable,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  /** Este fragmento de codigo me permite realizar la peticion  */
  private url:string = 'https://www.googleapis.com/youtube/v3/playlistItems';
  private apiKey:string = 'AIzaSyCc79IMYMZ8WGkuHT2WyBDWJRp8A2cM-CM'; 
  private resultado = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getPlayList(idPlayList:string){
    let vinculo = `${this.url}`;
    const parametros = new HttpParams().set('playlistId',idPlayList).set('maxResults','50').set('part','id,snippet').set('key',this.apiKey);
    return this.http.get(vinculo,{params:parametros}).pipe(map((resp:any) =>resp.items));
    
  }

  setBusqueda(result: any[]):void{
    this.resultado.next(result);
  }

  getBusqueda():Observable<any[]>{
    return this.resultado.asObservable();
  }

}
