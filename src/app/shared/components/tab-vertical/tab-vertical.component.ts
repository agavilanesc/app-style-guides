import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-vertical',
  templateUrl: './tab-vertical.component.html',
  styleUrls: ['./tab-vertical.component.scss']
})
export class TabVerticalComponent implements OnInit {
  tabLoadContent: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  getContentLoaded(index: number) {
    if ( !this.tabLoadContent[index] ) {
      this.tabLoadContent[index] = '';
    }

    return this.tabLoadContent[index];
  }

}
