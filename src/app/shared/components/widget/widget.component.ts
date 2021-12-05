import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWidgetSettingsComponent } from 'src/app/shared/components/modal-widget-settings/modal-widget-settings.component';
import { Widget } from '../../models/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  isMaximized: boolean = false;
  scrollPosition: number = 0;

  @Input() widget: Widget;
  @Output() widgetEventEmitter: EventEmitter<Widget> = new EventEmitter<Widget>();
  
  ngOnInit(): void {
  }

  constructor(private dialog: MatDialog) { }

  maximize() {
    const dashboardItem = document.querySelectorAll(".dashboard__item");
    const currentItem = document.getElementById(this.widget.widget_id);
    const iconMove = document.querySelector(`#${this.widget.widget_id} .widget-header__actions .icon-move`);
    const iconMaximize = document.querySelector(`#${this.widget.widget_id} .widget-header__actions .icon-maximize`);
    const iconRestore = document.querySelector(`#${this.widget.widget_id} .widget-header__actions .icon-restore`);
    const main = document.getElementsByTagName("main").item(0);

    this.isMaximized = !this.isMaximized;
    this.scrollPosition = main.scrollTop;

    dashboardItem.forEach( $item => $item.classList.add("hidden"));
    currentItem.parentElement.classList.add("col-12");
    currentItem.classList.add("widget-maximized");
    currentItem.classList.remove("hidden");
    iconMove.classList.add("hidden");
    iconMaximize.classList.add("hidden");
    iconRestore.classList.remove("hidden");
    main.scrollTo(0, 0);    
  }

  restore() {
      const dashboardItem = document.querySelectorAll(".dashboard__item");
      const currentItem = document.getElementById(this.widget.widget_id);
      const iconMove = document.querySelector(`#${this.widget.widget_id} .widget-header__actions .icon-move`);
      const iconMaximize = document.querySelector(`#${this.widget.widget_id} .widget-header__actions .icon-maximize`);
      const iconRestore = document.querySelector(`#${this.widget.widget_id} .widget-header__actions .icon-restore`);
      const main = document.getElementsByTagName("main").item(0);

      dashboardItem.forEach( $item => $item.classList.remove("hidden"));
      currentItem.parentElement.classList.remove("col-12");
      currentItem.classList.remove("widget-maximized");
      iconMove.classList.remove("hidden");
      iconMaximize.classList.remove("hidden");
      iconRestore.classList.add("hidden");
      
      this.isMaximized = !this.isMaximized;
      main.scrollTo(0, this.scrollPosition);
  }

  openWidgetSettings() {
    const dialogRef = this.dialog.open(ModalWidgetSettingsComponent, {
      width : '30%',
      data  : this.widget
    });

    dialogRef.afterClosed().subscribe(widget => {
      if ( widget ) {
        this.setting(widget);
      }
    });
  }

  remove() {
    this.widgetEventEmitter.emit(this.widget);
  }

  setting(widget: Widget) {

  }
}
