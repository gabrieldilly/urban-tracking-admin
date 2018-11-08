import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EstacoesService } from '../services/estacoes.service';
import { EditarEstacaoComponent } from '../editar-estacao/editar-estacao.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-estacao',
  templateUrl: './ver-estacao.component.html',
  styleUrls: ['./ver-estacao.component.scss']
})
export class VerEstacaoComponent implements OnInit, OnDestroy {
  estacao: any;
  linhas: any[];
  private sub: any;

  constructor(private route: ActivatedRoute, 
    public Estacoes: EstacoesService,
    public dialog: MatDialog) {
    this.Estacoes = Estacoes;
    
  }

  ngOnInit() {
    this.estacao = {};
    this.sub = this.route.params.subscribe(params => {
      this.estacao.id = parseInt(params.id);
      this.Estacoes.loadEstacao(this.estacao.id)
        .then((estacao) => {
          console.log(estacao);
          this.estacao = estacao;
        });
        this.Estacoes.loadLinhas(this.estacao.id)
        .then((linhas) => {
          console.log(linhas);
          this.linhas = linhas;
        });
       
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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


}
