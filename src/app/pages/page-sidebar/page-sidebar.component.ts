import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/shared/services/data-api.service';

@Component({
  selector: 'app-page-sidebar',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.scss']
})
export class PageSidebarComponent implements OnInit {
  toggleSideBar: boolean = false;

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Sidebar");
  }

}
