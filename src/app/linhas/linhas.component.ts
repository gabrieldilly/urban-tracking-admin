import { Component, OnInit } from '@angular/core';
import { ModaisService } from '../services/modais.service';
import { CriarLinhaComponent } from '../criar-linha/criar-linha.component';
import { MatDialog } from '@angular/material';
import { EditarLinhaComponent } from '../editar-linha/editar-linha.component';
import { LinhasService } from '../services/linhas.service';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.scss']
})
export class LinhasComponent implements OnInit {
  selecionada: number;
  filtradas: any[];

  constructor(
    public Modais: ModaisService, 
    public Linhas: LinhasService,
    public dialog: MatDialog) {
    this.Modais = Modais;
    this.Linhas = Linhas;
    
    this.Linhas.loadLinhas()
      .then((linhas) => {
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
    for (let linha of this.Linhas.list)
      if (parseInt(linha.idmodal) === idmodal) 
        this.filtradas.push(linha);
  }

  editarLinha(linha) {
    const dialogRef = this.dialog.open(EditarLinhaComponent, {
      width: '400px',
      data: {linha: linha}
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  
  criarLinha() {
    const dialogRef = this.dialog.open(CriarLinhaComponent, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((data) => {
      console.log('The dialog was closed');
      console.log(data);

      if (data && data.nome && data.idmodal) {
        this.Linhas.criarLinha(data);
      }
      this.selecionarModal(this.selecionada);
    });
  }

}
