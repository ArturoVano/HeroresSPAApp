import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, delay, switchMap, tap } from 'rxjs';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent {

  hero$: Observable<Hero | undefined> = this.activatedRoute.params.pipe(
    switchMap(params => this.heroesService.getHeroById(params['id'])),
    tap(hero => {
      if (!hero) this.router.navigate(['/heroes/list'])
      this.spinner$.next(false);
    }),
  )

  spinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  goBack(): void {
    this.router.navigate(['heroes/list']);
  }
}
