import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModaisService } from '../services/modais.service';

@Component({
  selector: 'app-criar-linha',
  templateUrl: './criar-linha.component.html',
  styleUrls: ['./criar-linha.component.scss']
})
export class CriarLinhaComponent implements OnInit {
  nome: string;
  rota: string;
  idmodal: number;

  constructor(
    public dialogRef: MatDialogRef<CriarLinhaComponent>,
    public Modais: ModaisService
  ) {
    this.Modais = Modais;
    this.Modais.loadModais()
    .then((modais) => {
      console.log(modais);
    });
  }
  
  ngOnInit() {
    
  }
    
  onCancelar(): void {
    this.dialogRef.close();
  }
  
  criarLinha() {
    this.dialogRef.close({
      nome: this.nome,
      idmodal: this.idmodal,
      rotas: [{
        nome: this.rota
      }]
    });
  }
}
