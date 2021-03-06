import { HeroService } from './../hero.service';
import { Hero } from "./../hero"
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private HeroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(heroesObs => this.heroes = heroesObs.slice(1, 5))
  }

}
