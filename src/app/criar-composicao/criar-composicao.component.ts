import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-criar-composicao',
  templateUrl: './criar-composicao.component.html',
  styleUrls: ['./criar-composicao.component.scss']
})
export class CriarComposicaoComponent implements OnInit {
  codigo: any;
  linha: string;
  modal: string;

  modais = [
    {value: 'steak-0', viewValue: 'Metrô'},
    {value: 'pizza-1', viewValue: 'BRT'},
    {value: 'tacos-2', viewValue: 'VLT'},
    {value: 'tacos-2', viewValue: 'Trem'},
    {value: 'tacos-2', viewValue: 'Ônibus'}
  ];

  constructor(
    public dialogRef: MatDialogRef<CriarComposicaoComponent>
  ) {}
  
  ngOnInit() {
    
  }
    
  onCancelar(): void {
    this.dialogRef.close();
  }
  
  criarComposicao() {
    // Criar Novo Modal no BD
    this.dialogRef.close({codigo: this.codigo}),
    this.dialogRef.close({linha: this.linha});
    this.dialogRef.close({modal: this.modal});
  
  }

}
