import { Component, OnInit } from '@angular/core';
import { ModaisService } from '../services/modais.service';
import { EstacoesService } from '../services/estacoes.service';

@Component({
  selector: 'app-estacoes',
  templateUrl: './estacoes.component.html',
  styleUrls: ['./estacoes.component.scss']
})
export class EstacoesComponent implements OnInit {
  selecionada: number;
  filtradas: any[];

  constructor(public Modais: ModaisService, public Estacoes: EstacoesService) {
    this.Modais = Modais;
    this.Estacoes = Estacoes;
    
    this.Estacoes.loadEstacoes()
      .then((estacoes) => {
        this.Modais.loadModais()
          .then((modais) => {
            console.log(modais);
            this.selecionarEstacao(modais[0].id);
          });
      });
    
  }

  ngOnInit() {
  }

  selecionarEstacao(idModal: number) {
    console.log(idModal);
    this.selecionada = idModal;
    this.filtradas = [];
    for (let estacao of this.Estacoes.list)
      if (parseInt(estacao.idModal) === idModal) 
        this.filtradas.push(estacao);
  }

}
