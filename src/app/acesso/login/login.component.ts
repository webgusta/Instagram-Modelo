import { Component, EventEmitter, Output } from '@angular/core';
import {Autenticacao} from '../../autenticacao.service' ;
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private autenticacao: Autenticacao
  ) {}

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })

  public exibirPainelCadastro(): void{
    this.exibirPainel.emit('cadastro')
  }
  public autenticar(): void{
   this.autenticacao.autenticar(
    this.formulario.value.email,
    this.formulario.value.senha
   ) 
  }
}
