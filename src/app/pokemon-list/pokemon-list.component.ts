import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  
  constructor(private apiservice: ApiService){}
  
  ngOnInit(): void {
    this.apiservice.get(0, 10).then((response: any) => {
      response.results.forEach((responseElem: any) => {
        this.apiservice.getOne(responseElem.name).then((pokemon) => {
          this.pokemons.push(pokemon);    
          console.log(pokemon);
        });
      });
    })
  }
}

