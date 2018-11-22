import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LinhasService {
  list: any[];

  constructor(
    public httpClient: HttpClient
  ) {
    
    this.list = [];
  }
  loadLinhas(){
    return new Promise((resolve, reject) => {
      if (this.list.length === 0) {
        this.httpClient.get(`${environment.apiURL}/linhas`).toPromise()
          .then((response: any[]) => {
            this.list = response;
            resolve(this.list);
          })
          .catch((err) => reject(err));
      } else {
        resolve(this.list);
      }      
    });
  }

  loadLinha(id){
    return this.httpClient.get(`${environment.apiURL}/linhas/${id}`).toPromise();
  }

  criarLinha(linha) {
    this.list.push(linha);
  }
  
}
