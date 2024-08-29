import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  readonly limit: number = 12;

  pokemons: any[] = [];
  page: number = 1;
  totalPokemons: number = 0;
  
  constructor(private apiservice: ApiService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
   this.getPokemons();
  }

  getPokemons() {
    if (this.route.snapshot.queryParams["page"] != null)
      this.page = parseInt(this.route.snapshot.queryParams["page"]);

    this.apiservice.get(this.page * this.limit, this.limit).then((response: any) => {
      this.totalPokemons = response.count;

      response.results.forEach((responseElem: any) => {
        this.apiservice.getOne(responseElem.name).then((pokemon) => {
          this.pokemons.push(pokemon);    
        });
      });
    })
  }
}

