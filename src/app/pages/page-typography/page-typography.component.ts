import { Component, OnInit } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-typography',
  templateUrl: './page-typography.component.html',
  styleUrls: ['./page-typography.component.scss']
})
export class PageTypographyComponent implements OnInit {
  indexDocument: IndexDocument[];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Tipografía");

    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["typography"]["index"];
    });

    Prism.highlightAll();
  }
}
