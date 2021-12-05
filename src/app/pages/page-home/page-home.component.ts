import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../shared/services/data-api.service';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Inicio");
  }

}
