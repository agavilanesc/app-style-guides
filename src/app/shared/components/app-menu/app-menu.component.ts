import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})

export class AppMenuComponent implements OnInit {
  appMenu: Menu[];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.getData().subscribe(data => {
      this.appMenu = data["app-menu"]["data"];
    });
  }
  
}
