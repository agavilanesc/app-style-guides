import { Component, OnInit } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document.js';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.scss']
})
export class PageTabsComponent implements OnInit {
  indexDocument: IndexDocument[];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Tabs");

    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["tabs"]["index"];
    });

    Prism.highlightAll();
  }
}
