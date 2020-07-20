import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isloggedIn : boolean ;

  constructor(private  authService: AuthService ) { }

  ngOnInit(): void {
  }

  public isUserLoggedIn(): boolean{
      return this.authService.isLoggedInUser()
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
