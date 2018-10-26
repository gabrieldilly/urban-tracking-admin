import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-criar-modal',
  templateUrl: './criar-modal.component.html',
  styleUrls: ['./criar-modal.component.scss']
})
export class CriarModalComponent implements OnInit{
  nome: string;

  constructor(
    public dialogRef: MatDialogRef<CriarModalComponent>
  ) {}
  
  ngOnInit() {
    
  }
    
  onCancelar(): void {
    this.dialogRef.close();
  }
  
  criarModal() {
    // Criar Novo Modal no BD
    this.dialogRef.close({nome: this.nome})
  }
}
