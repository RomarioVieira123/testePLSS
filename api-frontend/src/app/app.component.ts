import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = "api-front"

  constructor(private router : Router, private route: ActivatedRoute){}

  ngOnInit(){

  }

  newPessoa(){
    this.router.navigate(['new-pessoa'],{ relativeTo: this.route });
  }

  listPessoa(){
    this.router.navigate(['list-pessoa'], { relativeTo: this.route });
  }
}

