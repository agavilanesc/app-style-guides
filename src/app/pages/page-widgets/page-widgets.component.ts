import { Component, OnInit } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { Widget } from 'src/app/shared/models/widget';
import { DataApiService } from '../../shared/services/data-api.service';
import { Sortable } from '@shopify/draggable';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-widgets',
  templateUrl: './page-widgets.component.html',
  styleUrls: ['./page-widgets.component.scss']
})
export class PageWidgetsComponent implements OnInit {
  indexDocument: IndexDocument[];
  widgets: Widget[] = [];
  sortable: Sortable;

  constructor( private dataApiService: DataApiService  ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Widgets");

    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["widgets"]["index"];
      this.widgets.push(data["widgets"]["data"][0]);
    });

    const body = document.querySelector("body");
    const dashboardDropzone = document.querySelectorAll(".dashboard__dropzone");

    this.sortable = new Sortable(dashboardDropzone, { 
      draggable: ".dashboard__item",
      handle: ".dashboard__item .widget-header .icon-move"
    });
    this.sortable.on("drag:start", (e) => this.sortable.options.classes.mirror = [e.sourceContainer.classList.item(0)]);
    this.sortable.on("drag:out:container", () => { body.style.setProperty('cursor', 'no-drop'); });
    this.sortable.on("drag:stop", () => { body.style.setProperty('cursor', 'default'); });

    Prism.highlightAll();
  }

  removeWidget() {
    this.widgets.pop();
  }
}
