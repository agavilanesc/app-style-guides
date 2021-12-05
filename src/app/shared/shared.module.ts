import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { HeaderComponent } from './components/header/header.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { TabComponent } from './components/tab/tab.component';
import { TabVerticalComponent } from './components/tab-vertical/tab-vertical.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetMenuComponent } from './components/widget-menu/widget-menu.component';
import { ThreeDotsMenuComponent } from './components/three-dots-menu/three-dots-menu.component';
import { IndexDocumentComponent } from './components/index-document/index-document.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ModalWidgetAddComponent } from './components/modal-widget-add/modal-widget-add.component';
import { ModalWidgetSettingsComponent } from './components/modal-widget-settings/modal-widget-settings.component';


@NgModule({
  declarations: [
    MainHeaderComponent,
    HeaderComponent, 
    AppMenuComponent, 
    MainMenuComponent, 
    SidebarComponent, 
    CardComponent, 
    TabComponent, 
    TabVerticalComponent, 
    WidgetComponent,
    WidgetMenuComponent,  
    ThreeDotsMenuComponent, 
    IndexDocumentComponent, 
    MenuItemComponent,
    ModalMessageComponent,
    ModalConfirmComponent,
    ModalWidgetAddComponent,
    ModalWidgetSettingsComponent
  ],
  entryComponents: [
    WidgetComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    MainHeaderComponent,
    HeaderComponent,
    AppMenuComponent,
    MainMenuComponent,
    SidebarComponent,
    CardComponent,
    TabComponent, 
    TabVerticalComponent,
    WidgetComponent,
    WidgetMenuComponent, 
    ThreeDotsMenuComponent,
    IndexDocumentComponent, 
    MenuItemComponent, 
    ModalMessageComponent,
    ModalConfirmComponent
  ]
})
export class SharedModule { }
