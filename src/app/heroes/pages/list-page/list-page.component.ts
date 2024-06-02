import { Component } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';
import { BehaviorSubject, Observable, combineLatest, debounceTime, filter, map, startWith, tap } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  search = new FormControl('');

  heroes$: Observable<Hero[]> = combineLatest([
    this.heroesService.getHeroes(),
    this.search.valueChanges.pipe(startWith(''), debounceTime(200))
  ]).pipe(
    map(([heroes, search]) => {
      if (search && search?.length >= 3) {
        heroes = heroes.filter(
          ({name}) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        }
      return heroes;
    }),
    tap((heroes) => {
      if (!heroes) 
        this.snackbarService.showMessage('Error loading heroes', false) 
      this.spinner$.next(false);
    })
  );

  spinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor( private heroesService: HeroesService,
               private snackbarService: SnackbarService, 
  ) {}
}
