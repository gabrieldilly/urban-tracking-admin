import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editar-composicao',
  templateUrl: './editar-composicao.component.html',
  styleUrls: ['./editar-composicao.component.scss']
})
export class EditarComposicaoComponent implements OnInit {
  composicao: any;
  codigo: any;
  linha: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarComposicaoComponent>
  ) {
    
  }
  
  ngOnInit() {
    this.composicao = this.data.composicao;
    this.codigo = this.composicao.codigo;
    this.linha = this.composicao.linha;
  }
    
  onCancelar(): void {
    console.log(this.dialogRef);
    this.dialogRef.close();
  }

  atualizarEstacao() {
    this.composicao.codigo = this.codigo;
    this.composicao.linha = this.linha;
  }

}
