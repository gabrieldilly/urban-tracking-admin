import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-criar-linha',
  templateUrl: './criar-linha.component.html',
  styleUrls: ['./criar-linha.component.scss']
})
export class CriarLinhaComponent implements OnInit {
  nome: string;
  rota: string;

  constructor(
    public dialogRef: MatDialogRef<CriarLinhaComponent>
  ) {}
  
  ngOnInit() {
    
  }
    
  onCancelar(): void {
    this.dialogRef.close();
  }
  
  criarLinha() {
    // Criar Novo Modal no BD
    this.dialogRef.close({nome: this.nome}),
    this.dialogRef.close({rota: this.rota})
  }
}
