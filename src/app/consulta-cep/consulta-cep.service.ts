import {Component, inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class ConsultaCepService {

  private readonly baseUrl = 'http://viacep.com.br/ws/';

  private httpClient: HttpClient = inject(HttpClient);

  buscarCep(cep: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${cep}/json`);
  }
}
