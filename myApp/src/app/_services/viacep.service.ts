import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: String = environment.viaCepUrl

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.http.get<User>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map((response) =>{
        return response;
      })
    )
  }
}
