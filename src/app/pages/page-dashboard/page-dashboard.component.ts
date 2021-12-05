import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataApiService } from '../../shared/services/data-api.service';
import { IndexDocument } from 'src/app/shared/models/index-document';
import { Widget } from 'src/app/shared/models/widget';
import { WidgetClass } from 'src/app/shared/models/widget';
import { ModalWidgetAddComponent, WidgetAddDialog } from 'src/app/shared/components/modal-widget-add/modal-widget-add.component';
import { MatDialog } from '@angular/material/dialog';
import { Menu } from 'src/app/shared/models/menu';
import { Sortable } from '@shopify/draggable';
import * as Prism from '../../../assets/js/PrismJS_1.20.0.js';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {
  indexDocument: IndexDocument[];
  widgets: Widget[];
  leftWidgets: Widget[];
  rightWidgets: Widget[];
  menu: Menu[];
  sortable: Sortable;
  addWidgetLeftPanel: boolean = true;
  tabLoadContent: string[] = [];

  @ViewChild("widgetOverlay", { read: ViewContainerRef }) widgetOverlay: ViewContainerRef;
  
  constructor( private dataApiService: DataApiService, private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Dashboard");
    
    this.dataApiService.getData().subscribe(data => {
      this.indexDocument = data["dashboard"]["index"];
      this.widgets = data["widgets"]["data"];
      this.leftWidgets = this.widgets.filter( widget => widget.section == "left" ).sort( (widgetA, widgetB ) => widgetA.order - widgetB.order );
      this.rightWidgets = this.widgets.filter( widget => widget.section == "right" ).sort( (widgetA, widgetB) => widgetA.order - widgetB.order );
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


    //Menú del Dashboard
    this.menu = [
      {
        "icon"     : "addchart",
        "title"    : "Agregar Widget",
        "action"   : "openNewWidgetDialog",
        "url"      : "",
        "disabled" : false,
        "children" : []
      },
      {
        "icon"     : "settings",
        "title"    : "Configurar...",
        "action"   : "",
        "url"      : "",
        "disabled" : false,
        "children" : []
      }
    ];

    Prism.highlightAll();
  }

  openNewWidgetDialog() {
    const dialogRef = this.dialog.open(ModalWidgetAddComponent, {
      width : 'calc(25% * 1.5)',
      data  : <WidgetAddDialog> {
        title   : 'Agregar widget',
        message : 'Seleccione ubicación',
        isLeftPanel : true
      }
    });

    dialogRef.afterClosed().subscribe(widgetAddDialog => {
      if ( widgetAddDialog ) {
        this.addWidgetLeftPanel = widgetAddDialog.isLeftPanel;
        this.addWidget();
      }
    });
  }

  addWidget() {
    const widgetColors: string[] = [ "blue", "orange", "green", "skyblue", "yellow", "cyan", "purple", "pink" ];
    const newWidget: Widget = new Widget();

    newWidget.widget_id = `widget-${this.widgets.length + 1}`;
    newWidget.title = `Título del ${newWidget.widget_id}`;
    newWidget.section = this.addWidgetLeftPanel ? "left": "right";
    newWidget.order = ( this.addWidgetLeftPanel ? this.leftWidgets.length : this.rightWidgets.length ) + 1;
    newWidget.class = new WidgetClass();
    newWidget.class.class_header = "widget-header";
    newWidget.class.class_body = "widget-content";
    newWidget.class.class_color = `widget-color-${widgetColors[Math.floor(Math.random() * widgetColors.length)]}`;

    this.widgets.push(newWidget);
    
    if ( this.addWidgetLeftPanel ) { 
      this.leftWidgets.push(newWidget); 

    } else { 
      this.rightWidgets.push(newWidget); 
    }
  }

  removeWidget(widget: Widget) {
    if ( widget.section === "left" ) {
      this.leftWidgets.splice(this.leftWidgets.indexOf(widget), 1);

    } else {
      this.rightWidgets.splice(this.rightWidgets.indexOf(widget), 1);
    }
  }

  onClickMenu(itemMenu: Menu) {
    switch ( itemMenu.action ) {
      case "openNewWidgetDialog":
        this.openNewWidgetDialog();
        break;

      default:
        break;
    }
  }

  getContentLoaded(index: number) {
    if ( !this.tabLoadContent[index] ) {
      this.tabLoadContent[index] = '';// `Contenido del tab ${index}`;
    }

    Prism.highlightAll();
    return this.tabLoadContent[index];
  }
}
