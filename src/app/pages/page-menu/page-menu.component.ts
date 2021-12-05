import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { DataApiService } from 'src/app/shared/services/data-api.service';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss']
})
export class PageMenuComponent implements OnInit {
  indexDocument: IndexDocument[];
  menu: Menu[];
  tabLoadContent: string[] = [];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Menus");

    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["menu"]["index"];
      this.menu = data["settings-menu"]["data"];
    });    
  }

  onClickMenu(itemMenu: Menu) {
    switch ( itemMenu.action ) {
      case "goToFacebook":
        alert("click en Ir a Facebook")
        break;
      case "goToTwitter":
        alert("click en Ir a Twitter")
        break;
      case "goToInstagram":
        alert("click en Ir a Instagram")
        break;    
      default:
        break;
    }
  }

  getContentLoaded(index: number) {
    if ( !this.tabLoadContent[index] ) {
      this.tabLoadContent[index] = ''; // `Contenido del tab ${index}`;
    }

    Prism.highlightAll();
    return this.tabLoadContent[index];
  }
}
