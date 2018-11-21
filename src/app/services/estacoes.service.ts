import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EstacoesService {
  list: any[];
  linhas: any;

  constructor(
    public httpClient: HttpClient
  ) {
    this.list = [];
    this.linhas = {};
  }

  loadEstacoes() {
    return new Promise((resolve, reject) => {
      if (this.list.length === 0) {
        this.httpClient.get(`${environment.apiURL}/estacoes`).toPromise()
          .then((response: any[]) => {
            this.list = response;

            for (let estacao of this.list) {
              estacao.totalLinhas = 10;
            }
            resolve(this.list);
          })
          .catch((err) => reject(err));
      } else {
        resolve(this.list);
      }      
    });   
  }

  loadEstacao(estacaoId: number) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${environment.apiURL}/estacoes/${estacaoId}`).toPromise()
        .then((response: any[]) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    });   
  }

  loadLinhas(estacaoId: number) {
    return new Promise((resolve, reject) => {
      if (!this.linhas[estacaoId]) {
        this.httpClient.get(`${environment.apiURL}/linhas/estacao/${estacaoId}`).toPromise()
          .then((response: any[]) => {
            this.linhas[estacaoId] = response;
            resolve(response);
          })
          .catch((err) => reject(err));
      } else {
        resolve(this.linhas[estacaoId]);
      }      
    });   
  }

}
