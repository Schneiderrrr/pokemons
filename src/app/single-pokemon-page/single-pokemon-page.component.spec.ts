import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePokemonPageComponent } from './single-pokemon-page.component';

describe('SinglePokemonPageComponent', () => {
  let component: SinglePokemonPageComponent;
  let fixture: ComponentFixture<SinglePokemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePokemonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
