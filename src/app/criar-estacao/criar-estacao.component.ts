import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-criar-estacao',
  templateUrl: './criar-estacao.component.html',
  styleUrls: ['./criar-estacao.component.scss']
})
export class CriarEstacaoComponent implements OnInit {
  nome: string;
  endereco: string;
  modal: string;

  constructor(
    public dialogRef: MatDialogRef<CriarEstacaoComponent>
  ) {}
  
  ngOnInit() {
    
  }
    
  onCancelar(): void {
    this.dialogRef.close();
  }
  
  criarEstacao() {
    // Criar Novo Modal no BD
    this.dialogRef.close({nome: this.nome}),
    this.dialogRef.close({endereco: this.endereco}),
    this.dialogRef.close({modal: this.modal});
  }

}
