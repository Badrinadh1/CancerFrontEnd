import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor(private http:HttpClient) { }

  test()
  {
    return this.http.get("https://cancerapi.azurewebsites.net/deathsperyear/2015")
  }
}
