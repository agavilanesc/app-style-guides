import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageColorsComponent } from './page-colors/page-colors.component';
import { PageTypographyComponent } from './page-typography/page-typography.component';
import { PageWidgetsComponent } from './page-widgets/page-widgets.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageButtonsComponent } from './page-buttons/page-buttons.component';
import { PageFormsComponent } from './page-forms/page-forms.component';
import { PageExpandComponent } from './page-expand/page-expand.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { PageCardsComponent } from './page-cards/page-cards.component';
import { PageModalsComponent } from './page-modals/page-modals.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { PageSidebarComponent } from './page-sidebar/page-sidebar.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: PageHomeComponent
  },  
  {
    path: 'colors',
    component: PageColorsComponent
  },
  {
    path: 'typography',
    component: PageTypographyComponent
  },
  {
    path: 'widgets',
    component: PageWidgetsComponent
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent
  },
  {
    path: 'buttons',
    component: PageButtonsComponent
  },
  {
    path: 'forms',
    component: PageFormsComponent
  },
  {
    path: 'expansion-panel',
    component: PageExpandComponent
  },
  {
    path: 'tabs',
    component: PageTabsComponent
  },
  {
    path: 'cards',
    component: PageCardsComponent
  },
  {
    path: 'modals',
    component: PageModalsComponent
  },
  {
    path: 'menu',
    component: PageMenuComponent
  },
  {
    path: 'sidebar',
    component: PageSidebarComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
