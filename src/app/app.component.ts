import { Component } from '@angular/core';
import { IconApiService } from '../app/shared/services/icon-api.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'app-style-guides';
  icons: any;

  constructor(private iconService: IconApiService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.iconService.getIcons().subscribe(data => {
      this.icons = data;
      this.icons.forEach(icon => {
        this.iconRegistry.addSvgIcon(icon.name, this.sanitizer.bypassSecurityTrustResourceUrl(icon.url));
      });
    });
  }
}
