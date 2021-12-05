import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const DATA_URL: string = "./assets/data/data.json";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  headerTitle$: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(DATA_URL); 
  }
}
