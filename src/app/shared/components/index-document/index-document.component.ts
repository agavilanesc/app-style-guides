import { Component, OnInit, Input } from '@angular/core';
import { IndexDocument } from 'src/app/shared/models/index-document';

@Component({
  selector: 'app-index-document',
  templateUrl: './index-document.component.html',
  styleUrls: ['./index-document.component.scss']
})
export class IndexDocumentComponent implements OnInit {

  @Input() indexDocument: IndexDocument[];

  constructor() { }

  ngOnInit(): void {
  }

  goHome(e: Event) {
    e.preventDefault();
    document.getElementsByTagName("main").item(0).scrollTo(0, 0);
  }

}
