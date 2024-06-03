import { Component, OnDestroy } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';
import { BehaviorSubject, Observable, Subscription, combineLatest, debounceTime, map, startWith, switchMap, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnDestroy {

  search = new FormControl('');

  heroes$: Observable<Hero[]> = this.getListData()

  spinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  subscription: Subscription = new Subscription();

  constructor( private heroesService: HeroesService,
               private snackbarService: SnackbarService, 
  ) {}

  fillHeroes(): void {
    this.spinner$.next(true);
    
    // In case there is no hero in the local data, we ask for it externally
    this.subscription.add(
      this.heroesService.getHeroes().pipe(
        switchMap((heroes) => {
          if (heroes?.length) {
            return heroes;
          } else {
            return this.heroesService.initiateExternalHeroes();
          }         
        })
      ).subscribe((success) => {
        if (!success) 
          this.snackbarService.showMessage('Error saving heroes of external api into local db', false) 
        else {
          this.heroes$ = this.getListData()
        };
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getListData(): Observable<Hero[]> {
    return combineLatest([
      this.heroesService.getHeroes(),
      this.search.valueChanges.pipe(startWith(''), debounceTime(200)),
      this.heroesService.refresh$
    ]).pipe(
      map(([heroes, search, refresh]) => {
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
  }
}
