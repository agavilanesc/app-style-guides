import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface WidgetAddDialog {
  title       : string;
  message     : string;
  isLeftPanel : boolean;
}


@Component({
  selector: 'app-modal-widget-add',
  templateUrl: './modal-widget-add.component.html',
  styleUrls: ['./modal-widget-add.component.scss']
})
export class ModalWidgetAddComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ModalWidgetAddComponent>,
    @Inject(MAT_DIALOG_DATA) public widgetAddDialog: WidgetAddDialog ) { }

  ngOnInit(): void {
  }

  ok() {
    this.dialogRef.close(this.widgetAddDialog);
  }

  cancel() {
    this.dialogRef.close();
  }
}