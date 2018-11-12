import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LinhasService } from '../services/linhas.service';
import { EditarLinhaComponent } from '../editar-linha/editar-linha.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-linha',
  templateUrl: './ver-linha.component.html',
  styleUrls: ['./ver-linha.component.scss']
})
export class VerLinhaComponent implements OnInit, OnDestroy {
  linha: any;
  private sub: any;

  constructor(private route: ActivatedRoute, 
    public Linhas: LinhasService,
    public dialog: MatDialog) {
    this.Linhas = Linhas;
    
  }

  ngOnInit() {
    this.linha = {};
    this.sub = this.route.params.subscribe(params => {
      this.linha.id = parseInt(params.id);

      this.Linhas.loadLinha(this.linha.id)
      .then(data => {
        console.log(data);
        this.linha = data;
      })
      .catch(err => console.log(err));

      
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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


}
