import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})

export class ListPessoaComponent implements OnInit{

  pessoas = [
  {id: 1, nome: "Fulano", email: "fulano@gmail.com", cpf:"012345678912",},
  {id: 2, nome: "Ciclano", email: "ciclano@gmail.com", cpf:"856985678912", },
  {id: 3, nome: "Beltrano", email: "beltrano@gmail.com", cpf:"012874268912", },
  ];

  constructor(private api:ApiService, private router: Router, private route: ActivatedRoute){
    this.getPessoas();
  }

  ngOnInit(){
    this.getPessoas();
  }

  getPessoas = () => {
    this.api.getAllPessoas().subscribe(
      data => {
        this.pessoas = data
      },
      error =>{
          console.log("Erro: ",error.message);
      }
    );
  };
}




