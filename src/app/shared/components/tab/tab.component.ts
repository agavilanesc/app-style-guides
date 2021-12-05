import { Component, OnInit } from '@angular/core';
import * as Prism from '../../../../assets/js/PrismJS_1.20.0.js';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  tabLoadContent: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getContentLoaded(index: number) {
    if ( !this.tabLoadContent[index] ) {
      this.tabLoadContent[index] = '';
    }

    Prism.highlightAll();
    return this.tabLoadContent[index];
  }

}
