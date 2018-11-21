import { ComposicoesService } from './../services/composicoes.service';
import { Component, OnInit } from '@angular/core';
import { ModaisService } from '../services/modais.service';
import { EstacoesService } from '../services/estacoes.service';
import { CriarEstacaoComponent } from 'app/criar-estacao/criar-estacao.component';
import { MatDialog } from '@angular/material';
import { EditarEstacaoComponent } from 'app/editar-estacao/editar-estacao.component';
import { EditarComposicaoComponent } from 'app/editar-composicao/editar-composicao.component';
import { CriarComposicaoComponent } from 'app/criar-composicao/criar-composicao.component';

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
    public Estacoes: EstacoesService,
    public Composicoes: ComposicoesService,
    public dialog: MatDialog) {
    this.Modais = Modais;
    this.Estacoes = Estacoes;

    this.Composicoes.loadComposicoes()
    .then((composicoes) => {

    })
    
    this.Estacoes.loadEstacoes()
      .then((estacoes) => {
        this.Modais.loadModais()
          .then((modais) => {
            console.log(modais);
            this.selecionarModal(modais[0].id);
          });
      });
    
  }

  ngOnInit() {
  }

  selecionarModal(idModal: number) {
    console.log(idModal);
    this.selecionada = idModal;
    this.filtradas = [];
    for (let composicao of this.Composicoes.list)
      if (parseInt(composicao.idModal) === idModal) 
        this.filtradas.push(composicao);
  }

  editarEstacao(estacao) {
    const dialogRef = this.dialog.open(EditarComposicaoComponent, {
      width: '400px',
      data: {estacao: estacao}
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

      this.Modais.list.push({
        nome: data.nome,
        totalLinhas: 10,
        totalEstacoes: 20,
        totalComposicoes: 15
      })
    });
  }
}
