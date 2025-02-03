import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViacepService } from '../_services/viacep.service';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { UserinfoComponent } from '../userinfo/userinfo.component';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe, NgFor, NgIf, UserinfoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{ 
  userSelecionado: User | undefined;

userForm: FormGroup = new FormGroup({});

constructor(private fb: FormBuilder, private viacepService: ViacepService, private userService: UserService){

}

ngOnInit(): void {
    this.initilizeForm();
    this.observerPreenchimentoCep();
}

initilizeForm(){
  this.userForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
    cep: ['', [Validators.required]],
    logradouro: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    localidade: ['', [Validators.required]],
    uf:['', [Validators.required]],
    cpf: ['', [Validators.required]],
    data: ['', [Validators.required, this.yearValidator()]]
  });
}

yearValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    
    if (value && value.length >= 4) {
      const year = parseInt(value.toString().slice(-4), 10);

      if (year >= 2025) {
        return { invalidYear: 'O ano deve ser menor que 2025.' };
      }
    }

    return null;
  };
}

observerPreenchimentoCep(){
  this.userForm.get('cep')?.valueChanges.subscribe(value=> {
    if(value?.length == 8){
      this.buscarCep();
    }
  })
}

buscarCep(){
  var cep = this.userForm.get('cep')?.value;
  this.viacepService.getEnderecoByCep(cep).subscribe(
    {
      next: (response) => {
        this.userForm.patchValue({
          logradouro: response.logradouro,
          bairro: response.bairro,
          localidade: response.localidade,
          uf: response.uf

        })
      },
      error: () => {
        console.log("erro ao buscar cep.")
      }
    }
  )
}

SubmitForm() {
  if (this.userForm.valid) {
    console.log(this.userForm.value);
    this.users.push(this.userForm.value)
  }
}
  users: User[] = [
   
  ];

  infoSelectedUser(user: User){
    this.userSelecionado = user
  }


}
