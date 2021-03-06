import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroesObs => this.heroes = heroesObs)
  }

}
