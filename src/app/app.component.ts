import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

function getRandomColor():string {
  const letters:string = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  currentBackgroundColor: string = getRandomColor();
  constructor(){}
  ngOnInit(): void {
    interval(100).subscribe(() => {this.currentBackgroundColor = getRandomColor();
      });
  }

  
  
}
