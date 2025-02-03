import { Injectable } from '@angular/core';
import { User } from '../_models/user';  // Presumindo que o tipo User está correto
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Array de usuários
  users: User[] = [
    {
      name: 'João',
      email: 'b',
      cep: '',
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      cpf: '',
      data: ''
    },
    {
      name: 'Marcos',
      email: 'c',
      cep: '',
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      cpf: '',
      data: ''
    }
  ];

  constructor() { }

  // Método para retornar todos os usuários
  getUsers() {
    return this.users;
  }

  // Método para adicionar um novo usuário
  addUser(user: User) {
    // Adiciona o novo usuário ao array de usuários
    this.users.push(user);
  }
}
