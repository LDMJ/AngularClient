import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  configUrl = 'http://localhost/Server/Home/Contact';
  constructor(private http: HttpClient) {}
  getConfig() : Observable<any> {
    return this.http.get(this.configUrl, {
      observe: 'body', 
    responseType: 'json',
  });
  }
}
