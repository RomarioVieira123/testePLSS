import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseURL = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) { }

  postPessoa(pessoa): Observable<any>{
    return this.http.post(this.baseURL + 'pessoas/', pessoa,
    {headers: this.httpHeaders});
  };
}
