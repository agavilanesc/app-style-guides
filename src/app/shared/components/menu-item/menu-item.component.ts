import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() items: Menu[];
  @ViewChild('childMenu', { static: true }) public childMenu;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
