import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  mainMenu: Menu[];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.getData().subscribe(data => {
      this.mainMenu = data["main-menu"]["data"];
    });
  }
}
