import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialog } from '../../models/message-dialog';


@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {

  iconColors = {
    'info'    : 'color-first',
    'warning' : 'color-accent',
    'success' : 'color-success',
    'cancel'  : 'color-danger',
  }

  constructor( public dialogRef: MatDialogRef<ModalMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public messageDialog: MessageDialog ) { }

  ngOnInit(): void {
  }

  ok() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }

}
