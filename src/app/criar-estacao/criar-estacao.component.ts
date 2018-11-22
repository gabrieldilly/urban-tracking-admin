import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModaisService } from '../services/modais.service';

@Component({
  selector: 'app-criar-estacao',
  templateUrl: './criar-estacao.component.html',
  styleUrls: ['./criar-estacao.component.scss']
})
export class CriarEstacaoComponent implements OnInit {
  nome: string;
  lat: number;
  lng: number;
  idmodal: number;

  constructor(
    public dialogRef: MatDialogRef<CriarEstacaoComponent>,
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
  
  criarEstacao() {
    this.dialogRef.close({
      nome: this.nome,
      idmodal: this.idmodal,
      lat: this.lat,
      lng: this.lng
    });
  }

}
