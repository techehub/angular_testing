import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public isLoggedInUser():boolean{
     return true;
  }

}
