import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		console.log(1);
		return Promise.resolve(HEROES);
	}

	getHeroesLowly(): Promise<Hero[]> {
		return new Promise(resolve => {
		    // Simulate server latency with 2 second delay
		    setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}
}