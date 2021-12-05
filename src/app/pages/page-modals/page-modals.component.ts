import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMessageComponent } from '../../shared/components/modal-message/modal-message.component';
import { ModalConfirmComponent } from '../../shared/components/modal-confirm/modal-confirm.component';
import { MessageDialog } from '../../shared/models/message-dialog';

@Component({
  selector: 'app-page-modals',
  templateUrl: './page-modals.component.html',
  styleUrls: ['./page-modals.component.scss']
})
export class PageModalsComponent implements OnInit {

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  showDialog() {
    const dialogRef = this.dialog.open(ModalMessageComponent, {
      data: <MessageDialog> {
        icon    : 'info',
        title   : 'Título del mensaje',
        message : 'Este es un componente modal simple.'
      }
    });

    dialogRef.afterClosed().subscribe(resp => {
      if ( resp ) {
        //Mostrar alerta.
      }
    });
  }

  showConfirm() {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: <MessageDialog> {
        title   : 'Título del mensaje',
        message : 'Este es un componente modal de confirmación.'
      }
    });

    dialogRef.afterClosed().subscribe(resp => {
      if ( resp ) {
        //Mostrar alerta.
      }
    });
  }

}
