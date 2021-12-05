import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Widget } from '../models/widget';

const WIDGETS_URL: string = "./assets/data/data.json";

@Injectable({
  providedIn: 'root'
})
export class WidgetApiService {

  constructor(private http: HttpClient) { 
  }

  getWidgets(): Observable<Widget> {
    return this.http.get<Widget>(WIDGETS_URL); 
  }
}
