import { Component, OnInit } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { DataApiService } from '../../shared/services/data-api.service';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-expand',
  templateUrl: './page-expand.component.html',
  styleUrls: ['./page-expand.component.scss']
})
export class PageExpandComponent implements OnInit {
  indexDocument: IndexDocument;
  panelOpenState = false;
  
  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Panel de Expansión");

    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["expand"]["index"];      
    });

    Prism.highlightAll();
  }

}
