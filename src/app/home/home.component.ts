import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 x=0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.x);
    
  }
  affiche(){
  }
  add(){
    console.log(this.x);
    
  }

}
