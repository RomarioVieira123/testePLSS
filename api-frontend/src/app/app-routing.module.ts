import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPessoaComponent } from './new-pessoa/new-pessoa.component';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';

const routes: Routes = [
  {path:'new-pessoa',component: NewPessoaComponent},
  {path:'list-pessoa',component: ListPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [NewPessoaComponent, ListPessoaComponent]
