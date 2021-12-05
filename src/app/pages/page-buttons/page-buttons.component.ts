import { Component, OnInit } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { DataApiService } from '../../shared/services/data-api.service';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-buttons',
  templateUrl: './page-buttons.component.html',
  styleUrls: ['./page-buttons.component.scss']
})
export class PageButtonsComponent implements OnInit {
  indexDocument: IndexDocument[];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Botones");
    
    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["buttons"]["index"];
    });

    Prism.highlightAll();
  }

}
