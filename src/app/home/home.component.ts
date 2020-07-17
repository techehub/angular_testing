import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public add (a : number, b : number): number{

    if (a> 0 && b > 0 ){
      return a+b
    }
    else {
      return 0
    }
  }

}
