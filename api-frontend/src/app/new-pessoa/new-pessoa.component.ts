import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-pessoa',
  templateUrl: './new-pessoa.component.html',
  styleUrls: ['./new-pessoa.component.css']
})
export class NewPessoaComponent implements OnInit {

  constructor(private api:ApiService, private router: Router, private route: ActivatedRoute) { }

  pessoa = {nome:"", email:"", cpf:""};

  ngOnInit(): void {

  }

  cadastrarPessoa = () => {
    this.api.postPessoa(this.pessoa).subscribe(
      data => {
        console.log(data)
      },
      error =>{
          console.log("Erro: ",error.message);
      }
    );

  };
}
