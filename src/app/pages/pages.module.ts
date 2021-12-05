import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageButtonsComponent } from './page-buttons/page-buttons.component';
import { PageSidebarComponent } from './page-sidebar/page-sidebar.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { PageCardsComponent } from './page-cards/page-cards.component';
import { PageColorsComponent } from './page-colors/page-colors.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageWidgetsComponent } from './page-widgets/page-widgets.component';
import { PageTypographyComponent } from './page-typography/page-typography.component';
import { PageFormsComponent } from './page-forms/page-forms.component';
import { PageExpandComponent } from './page-expand/page-expand.component';
import { PageModalsComponent } from './page-modals/page-modals.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    PageButtonsComponent,
    PageSidebarComponent,
    PageMenuComponent,
    PageCardsComponent,
    PageColorsComponent,
    PageTabsComponent,
    PageDashboardComponent,
    PageWidgetsComponent,
    PageTypographyComponent,
    PageFormsComponent,
    PageExpandComponent,
    PageModalsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }