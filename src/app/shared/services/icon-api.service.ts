import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const ICONS_URL: string = "./assets/data/svg_icons.json";

@Injectable({
  providedIn: 'root'
})
export class IconApiService {

  constructor(private http: HttpClient) { }

  getIcons(): Observable<any> {
    return this.http.get<any>(ICONS_URL); 
  }
}
