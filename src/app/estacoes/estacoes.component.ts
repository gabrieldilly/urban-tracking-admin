import { Component, OnInit } from '@angular/core';
import { ModaisService } from '../services/modais.service';
import { EstacoesService } from '../services/estacoes.service';
import { CriarEstacaoComponent } from '../criar-estacao/criar-estacao.component';
import { MatDialog } from '@angular/material';
import { EditarEstacaoComponent } from '../editar-estacao/editar-estacao.component';

@Component({
  selector: 'app-estacoes',
  templateUrl: './estacoes.component.html',
  styleUrls: ['./estacoes.component.scss']
})
export class EstacoesComponent implements OnInit {
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

  selecionarModal(idmodal: number) {
    this.selecionada = idmodal;
    this.filtradas = [];
    for (let estacao of this.Estacoes.list)
      if (parseInt(estacao.idmodal) === idmodal) 
        this.filtradas.push(estacao);
  }

  editarEstacao(estacao) {
    const dialogRef = this.dialog.open(EditarEstacaoComponent, {
      width: '400px',
      data: {estacao: estacao}
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  
  criarEstacao() {
    const dialogRef = this.dialog.open(CriarEstacaoComponent, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((data) => {
      console.log('The dialog was closed');
      console.log(data);

      if (data && data.nome && data.idmodal) {
        this.Estacoes.criarEstacao(data)
          .then(() => {
            this.Estacoes.loadEstacoes(true);
            // TODO: fix this refresh
            this.selecionarModal(this.selecionada);
          });
      }
      this.selecionarModal(this.selecionada);
    });
  }

}
