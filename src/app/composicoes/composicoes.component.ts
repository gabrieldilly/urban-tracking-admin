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
    public dialog: MatDialog) {
    this.Modais = Modais;
    this.Estacoes = Estacoes;
    
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
    for (let estacao of this.Estacoes.list)
      if (parseInt(estacao.idModal) === idModal) 
        this.filtradas.push(estacao);
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
  
  criarEstacao() {
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
