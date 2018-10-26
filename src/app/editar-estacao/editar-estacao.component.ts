import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editar-estacao',
  templateUrl: './editar-estacao.component.html',
  styleUrls: ['./editar-estacao.component.scss']
})
export class EditarEstacaoComponent implements OnInit {
  modal: any;
  nome: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarEstacaoComponent>
  ) {
    
  }
  
  ngOnInit() {
    this.modal = this.data.modal;
    this.nome = this.modal.nome;
  }
    
  onNoClick(): void {
    console.log(this.dialogRef);
    this.dialogRef.close();
  }

  atualizarModal() {
    this.modal.nome = this.nome;
  }

}
