import { Component, OnInit } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { DataApiService } from '../../shared/services/data-api.service';
import { Card } from 'src/app/shared/models/card';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.scss']
})
export class PageCardsComponent implements OnInit {
  indexDocument: IndexDocument[];
  cards: Card[];
  tabLoadContent: string[] = [];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Cards");
    
    this.dataApiService.getData().subscribe(data => {
      this.cards = data["cards"]["data"];
      this.indexDocument = data["cards"]["index"];
    });
  }
  
  getContentLoaded(index: number) {
    if ( !this.tabLoadContent[index] ) {
      this.tabLoadContent[index] = ''; // `Contenido del tab ${index}`;
    }

    Prism.highlightAll();
    return this.tabLoadContent[index];
  }
}
