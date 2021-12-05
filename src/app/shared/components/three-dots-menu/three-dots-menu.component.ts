import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'app-three-dots-menu',
  templateUrl: './three-dots-menu.component.html',
  styleUrls: ['./three-dots-menu.component.scss']
})
export class ThreeDotsMenuComponent implements OnInit {

  @Input() items: Menu[];
  @Output() menuEventEmitter: EventEmitter<Menu> = new EventEmitter<Menu>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(itemMenu: Menu) {
    this.menuEventEmitter.emit(itemMenu);
  }
}
