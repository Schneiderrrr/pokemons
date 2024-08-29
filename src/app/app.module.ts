import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { CommonModule } from '@angular/common';
import { SinglePokemonPageComponent } from './single-pokemon-page/single-pokemon-page.component';
import { RouterModule } from '@angular/router';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { PokemonListPageComponent } from './pokemon-list-page/pokemon-list-page.component';

const routes = [
  {path: '', component: PokemonListPageComponent}
  , {path: ':id', component: SinglePokemonPageComponent}
  , {path: 'pokemons/:id', component: SinglePokemonPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    SinglePokemonPageComponent,
    SinglePokemonComponent,
    PokemonListPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
