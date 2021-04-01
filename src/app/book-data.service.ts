import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http:HttpClient) { }

  getData(url:any){
    let mainUrl= environment.apiurl+url;
    return this.http.get(mainUrl);

  }
  postData(url:any,data:any){
    let mainUrl= environment.apiurl+url;
    return this.http.post(mainUrl,data);

  }
}
