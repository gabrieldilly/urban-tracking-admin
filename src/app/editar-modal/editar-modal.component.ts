import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.component.html',
  styleUrls: ['./editar-modal.component.scss']
})
export class EditarModalComponent {

  constructor(
    public dialogRef: MatDialogRef<EditarModalComponent>
    ) {}
  
    
  onNoClick(): void {
    console.log(this.dialogRef);
    this.dialogRef.close();
  }

}

