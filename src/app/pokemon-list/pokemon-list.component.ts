import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;
  
  constructor(private apiservice: ApiService){}
  
  ngOnInit(): void {
   this.getPokemons();
  }

  getPokemons() {
    this.apiservice.get(this.page + 0, 10).then((response: any) => {
      this.totalPokemons = response.count;

      response.results.forEach((responseElem: any) => {
        this.apiservice.getOne(responseElem.name).then((pokemon) => {
          this.pokemons.push(pokemon);    
        });
      });
    })
  }
}

