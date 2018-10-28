import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editar-estacao',
  templateUrl: './editar-estacao.component.html',
  styleUrls: ['./editar-estacao.component.scss']
})
export class EditarEstacaoComponent implements OnInit {
  estacao: any;
  nome: string;
  linhas: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarEstacaoComponent>
  ) {
    
  }
  
  ngOnInit() {
    this.estacao = this.data.estacao;
    this.nome = this.estacao.nome;
  }
    
  onCancelar(): void {
    console.log(this.dialogRef);
    this.dialogRef.close();
  }

  atualizarEstacao() {
    this.estacao.nome = this.nome;
    this.estacao.linhas = this.linhas;
  }

}
