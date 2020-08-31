import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewPessoaComponent } from './new-pessoa/new-pessoa.component';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPessoaComponent,
    ListPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
