import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModaisService } from '../services/modais.service';
import { LinhasService } from '../services/linhas.service';

@Component({
  selector: 'app-criar-composicao',
  templateUrl: './criar-composicao.component.html',
  styleUrls: ['./criar-composicao.component.scss']
})
export class CriarComposicaoComponent implements OnInit {
  codigo: any;
  idlinha: number;
  idmodal: number;
  selecionada: number;
  filtradas: any[];

  constructor(
    public dialogRef: MatDialogRef<CriarComposicaoComponent>,
    public Modais: ModaisService,
    public Linhas: LinhasService,
  ) {
    this.Modais = Modais;
    this.Modais.loadModais()
    .then((modais) => {
      console.log(modais);
    });
    this.Linhas = Linhas;
    this.Linhas.loadLinhas()
    .then((linhas) => {
      console.log(linhas);
    });
  }
  
  ngOnInit() {
    
  }

  selecionarModal(idmodal: number) {
    this.selecionada = idmodal;
    this.filtradas = [];
    for (let linha of this.Linhas.list)
      if (parseInt(linha.idmodal) === idmodal) 
        this.filtradas.push(linha);
  }
    
  onCancelar(): void {
    this.dialogRef.close();
  }
  
  criarComposicao() {
    this.dialogRef.close({
      cod_rastreador: this.codigo,
      idmodal: this.idmodal,
      ultima_atualizacao: Date.now(),
      lat: 0,
      lng: 0
    });

  }

}
