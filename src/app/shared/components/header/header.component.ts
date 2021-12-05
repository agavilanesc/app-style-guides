import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle: string;

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.subscribe( ( title: string ) => this.headerTitle = title );
  }
}
