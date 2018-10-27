import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material';
import { EditarModalComponent } from '../editar-modal/editar-modal.component';
import { CriarModalComponent } from '../criar-modal/criar-modal.component';
import { ModaisService } from '../services/modais.service';

@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  styleUrls: ['./modais.component.scss']
})
export class ModaisComponent implements OnInit {
  modais: any[];

  constructor(
    public Modais: ModaisService,
    public dialog: MatDialog
  ) {
    this.Modais.loadModais()
    .then((modais: any[]) => {
      console.log(modais);
      this.modais = modais;
    });  
  }

  ngOnInit() {
    
  }

  editarModal(modal){
    const dialogRef = this.dialog.open(EditarModalComponent, {
      width: '400px',
      data: {modal: modal}
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  criarModal() {
    const dialogRef = this.dialog.open(CriarModalComponent, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((data) => {
      console.log('The dialog was closed');
      console.log(data);

      this.modais.push({
        nome: data.nome,
        totalLinhas: 10,
        totalEstacoes: 20,
        totalComposicoes: 15
      })
    });
  }
}