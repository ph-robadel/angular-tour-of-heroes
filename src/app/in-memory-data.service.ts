import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Pedro' },
      {id: 12, name: 'Henrique' },
      {id: 13, name: 'Robadel' },
      {id: 14, name: 'Marco' },
      {id: 15, name: 'Douglas' },
      {id: 16, name: 'Gabriel' },
      {id: 17, name: 'João' },
      {id: 18, name: 'Luan' },
      {id: 19, name: 'Igor' },
      {id: 20, name: 'Marlan' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}