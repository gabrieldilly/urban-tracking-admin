import { ComposicoesService } from './../services/composicoes.service';
import { Component, OnInit } from '@angular/core';
import { ModaisService } from '../services/modais.service';
import { EstacoesService } from '../services/estacoes.service';
import { CriarEstacaoComponent } from '../criar-estacao/criar-estacao.component';
import { MatDialog } from '@angular/material';
import { EditarEstacaoComponent } from '../editar-estacao/editar-estacao.component';
import { EditarComposicaoComponent } from '../editar-composicao/editar-composicao.component';
import { CriarComposicaoComponent } from '../criar-composicao/criar-composicao.component';

@Component({
  selector: 'app-composicoes',
  templateUrl: './composicoes.component.html',
  styleUrls: ['./composicoes.component.scss']
})
export class ComposicoesComponent implements OnInit {
  selecionada: number;
  filtradas: any[];

  constructor(
    public Modais: ModaisService, 
    public Composicoes: ComposicoesService,
    public dialog: MatDialog) {
    this.Modais = Modais;
    
    this.Composicoes.loadComposicoes()
      .then((composicoes) => {
        this.Modais.loadModais()
          .then((modais) => {
            console.log(modais);
            this.selecionarModal(modais[0].id);
          });
      });
    
  }

  ngOnInit() {
  }

  selecionarModal(idmodal: number) {
    this.selecionada = idmodal;
    this.filtradas = [];
    for (let composicao of this.Composicoes.list)
      if (parseInt(composicao.idmodal) === idmodal) 
        this.filtradas.push(composicao);
  }

  editarComposicao(composicao) {
    const dialogRef = this.dialog.open(EditarComposicaoComponent, {
      width: '400px',
      data: {composicao: composicao}
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  
  criarComposicao() {
    const dialogRef = this.dialog.open(CriarComposicaoComponent, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((data) => {
      console.log('The dialog was closed');
      console.log(data);

      if (data && data.cod_rastreador && data.idmodal) {
        this.Composicoes.criarComposicao(data)
          .then(() => {
            this.Composicoes.loadComposicoes(true);
            // TODO: fix this refresh
            this.selecionarModal(this.selecionada);
          });
      }
    });
  }

}
