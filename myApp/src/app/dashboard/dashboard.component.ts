import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserinfoComponent } from '../userinfo/userinfo.component';
import { User } from '../_models/user';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NgIf, UserinfoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userSelecionado: User | undefined;
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

  infoSelectedUser(user: User){
    this.userSelecionado = user
  }
}



/*
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserinfoComponent } from '../userinfo/userinfo.component';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NgIf, UserinfoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userSelecionado: User | undefined;
  users: User[] = [
    {
      name: '',
      email: '',
      cep: '',
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      cpf: '',
      data: ''

    },
  ];

  constructor(private userService: UserService){
    this.users = userService.getUsers();
  }

  infoSelectedUser(user: User){
    this.userSelecionado = user
  }
}

*/