import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from 'src/app/shared/models/widget';

@Component({
  selector: 'app-widget-menu',
  templateUrl: './widget-menu.component.html',
  styleUrls: ['./widget-menu.component.scss']
})
export class WidgetMenuComponent implements OnInit {

  constructor() { }
  
  @Input() widget: Widget;
  @Output() removeWidgetEvent: EventEmitter<Widget> = new EventEmitter<Widget>();
  @Output() settingWidgetEvent: EventEmitter<Widget> = new EventEmitter<Widget>();

  ngOnInit(): void { }

  changeColor(color: string): void { this.widget.class.class_color = color; }

  // eventTrigger(action: string) { 
  //   switch( action ) {
  //     case 'remove':
  //       this.removeWidgetEvent.emit();    
  //       break;
        
  //     case 'setting':          
  //       this.settingWidgetEvent.emit();    
  //       break;
    
  //     default:
  //       break;
  //   }
  // }
}
