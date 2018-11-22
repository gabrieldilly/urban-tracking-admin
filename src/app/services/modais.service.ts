import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ModaisService {
  list: any[];
  icons: any[];
  
  constructor(
    public httpClient: HttpClient
  ) {
    this.list = [];
    this.icons = ['directions_subway', 'directions_railway', 'directions_railway', 'directions_bus', 'directions_bus', 'directions_boat'];
  }

  loadModais(forceReload?) {
    return new Promise((resolve, reject) => {
      if (this.list.length === 0 || forceReload) {
        this.httpClient.get(`${environment.apiURL}/modais`).toPromise()
          .then((response: any[]) => {
            this.list = response;
  
            for (let modal of this.list) {
              modal.totalLinhas = 10;
              modal.totalEstacoes = 20;
              modal.totalComposicoes = 15;
              modal.icon = this.icons[this.list.indexOf(modal) % this.icons.length];
            }
            resolve(this.list);
          })
          .catch((err) => reject(err));
      } else {
        resolve(this.list);
      }
    });       
  }

  loadModal(modalId: number) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${environment.apiURL}/modais/${modalId}`).toPromise()
        .then((response: any) => {
          resolve(response);
        })
        .catch((err) => reject(err));
    });   
  }

  criarModal(modal) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${environment.apiURL}/modais`, modal).toPromise()
        .then((response: any) => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => reject(err));
    });   
  }

}
