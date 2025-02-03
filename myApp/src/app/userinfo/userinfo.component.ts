import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-userinfo',
  imports: [],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent {
 @Input() user: User =
 {
  name: '',
  email: '',
  cep: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: '',
  cpf: '',
  data:''
 };


 @Output() userInfoEmitter = new EventEmitter<User>();

 ReturnUserData(){
    this.userInfoEmitter.emit(this.user);
 }
}
