import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.component.html',
  styleUrls: ['./editar-modal.component.scss']
})
export class EditarModalComponent implements OnInit{
  modal: any;
  nome: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarModalComponent>
  ) {
    
  }
  
  ngOnInit() {
    this.modal = this.data.modal;
    this.nome = this.modal.nome;
  }
    
  onCancelar(): void {
    console.log(this.dialogRef);
    this.dialogRef.close();
  }

  atualizarModal() {
    this.modal.nome = this.nome;
  }

}

