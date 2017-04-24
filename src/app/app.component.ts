import { Component, OnInit } from '@angular/core';

import { Hero } from './hero'
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  styleUrls: ['./hero.css'],
  templateUrl: './app.html',
  providers: [HeroService]
})

export class AppComponent implements OnInit { 
	title = "Tour of Hero";
	heroes: Hero[];
	selectedHero:any;

	constructor(private heroService: HeroService) {

	}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		// this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		this.heroService.getHeroesLowly().then(heroes => {
			this.heroes = heroes;
		});

	}

	onSelect(hero:any) {
		this.selectedHero = hero;
	}
}