import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../../shared/models/color';
import { DataApiService } from 'src/app/shared/services/data-api.service';

@Component({
  selector: 'app-page-colors',
  templateUrl: './page-colors.component.html',
  styleUrls: ['./page-colors.component.scss']
})
export class PageColorsComponent implements OnInit {

  colors: Color[];

  constructor( private dataApiService: DataApiService ) { }

  ngOnInit(): void {
    this.dataApiService.headerTitle$.emit("Colores");
    
    this.dataApiService.getData().subscribe( data => {
      this.colors = data["colors"]["data"];
    });
  }
}
