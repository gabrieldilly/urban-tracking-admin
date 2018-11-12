import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editar-linha',
  templateUrl: './editar-linha.component.html',
  styleUrls: ['./editar-linha.component.scss']
})
export class EditarLinhaComponent implements OnInit {
  linha: any;
  nome: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarLinhaComponent>
  ) {
    
  }
  
  ngOnInit() {
    this.linha = this.data.linha;
    this.nome = this.linha.nome;
  }
    
  onCancelar(): void {
    console.log(this.dialogRef);
    this.dialogRef.close();
  }

  atualizarLinha() {
    this.linha.nome = this.nome;
  }

}
