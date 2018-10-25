import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material';
import { EditarModalComponent } from '../editar-modal/editar-modal.component';
import { CriarModalComponent } from '../criar-modal/criar-modal.component';

@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  styleUrls: ['./modais.component.scss']
})
export class ModaisComponent implements OnInit {
  modais: any[];

  constructor(
    public dialog: MatDialog
  ) { 
    this.modais = [
      {
        nome: "BRT",
        totalLinhas: 10,
        totalEstacoes: 20,
        totalComposicoes: 15
      },
      {
        nome: "VLT",
        totalLinhas: 10,
        totalEstacoes: 20,
        totalComposicoes: 15
      },
      {
        nome: "Ônibus",
        totalLinhas: 10,
        totalEstacoes: 20,
        totalComposicoes: 15
      }
      ]
      console.log(this.modais);
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