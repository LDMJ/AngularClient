import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import {NewServiceService} from './new-service.service';
import { filter, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { NgForm } from '@angular/forms';

interface IResponse {
  isset: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = "";
  response : any;
  name: string = "";
  tmp: string = "";
  nameUrlServer: string = "http://localhost/WebTestServer/Ping/";

  constructor(private http: HttpClient){

  }

  public search() {
   // console.log(name);
    this.nameUrlServer = this.nameUrlServer + this.name
    console.log(this.nameUrlServer);
    this.http.get(this.nameUrlServer)
    .subscribe((response)=>{
      this.response = response;
      this.tmp = "ok";
      console.log(this.response);
      console.log(this.tmp);
    })
  }
  inputHandler(event: any)
  {
    console.log(event.target.value);
    const value = event.target.value
    this.name = value
  }

}
