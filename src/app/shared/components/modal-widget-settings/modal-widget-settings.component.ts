import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Widget } from 'src/app/shared/models/widget';


@Component({
  selector: 'app-modal-widget-settings',
  templateUrl: './modal-widget-settings.component.html',
  styleUrls: ['./modal-widget-settings.component.scss']
})
export class ModalWidgetSettingsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ModalWidgetSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public widget: Widget ) { }

  ngOnInit(): void {
  }

  ok() {
    this.dialogRef.close(this.widget);
  }

  cancel() {
    this.dialogRef.close();
  }

}
