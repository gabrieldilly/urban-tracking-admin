import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ComposicoesService {
  list: any[];
  linhas: any;

  constructor(
    public httpClient: HttpClient
  ) {
    this.list = [];
    this.linhas = {};
  }

  loadComposicoes(forceReload?) {
    return new Promise((resolve, reject) => {
      if (this.list.length === 0 || forceReload) {
        this.httpClient.get(`${environment.apiURL}/composicoes`).toPromise()
          .then((response: any[]) => {
            this.list = response;
            console.log('Composicoes', response);
            resolve(this.list);
          })
          .catch((err) => reject(err));
      } else {
        resolve(this.list);
      }      
    });   
  }

  loadComposicao(composicaoId: number) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${environment.apiURL}/composicoes/${composicaoId}`).toPromise()
        .then((response: any[]) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    });   
  }

  criarComposicao(composicao) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${environment.apiURL}/composicoes`, composicao).toPromise()
        .then((response: any) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => reject(err));
    });   
  }

}

