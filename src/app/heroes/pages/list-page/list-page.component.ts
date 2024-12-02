import { Component } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';
import { BehaviorSubject, Observable, combineLatest, debounceTime, map, startWith, switchMap, take, tap } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  search = new FormControl('', Validators.minLength(3));

  currentPage$ = new BehaviorSubject<number>(0);

  /*
   * For when there is no heroes in db, not only by FE filtering
  */
  noHeroesInDB = new BehaviorSubject(false);

  heroes$: Observable<Hero[]> = this.getListData();

  spinner$ = new BehaviorSubject<boolean>(true);

  pageSize = 25;

  totalListItems = 0;

  constructor( private heroesService: HeroesService,
               private snackbarService: SnackbarService, 
  ) {}

  getListData(): Observable<Hero[]> {
    return  combineLatest([
      this.heroesService.getHeroes(),
      this.search.valueChanges.pipe(startWith(''), debounceTime(200)),
      this.currentPage$,
    ]).pipe(
      tap(() => console.time()),
      tap(([heroes]) => this.noHeroesInDB.next(!heroes.length ? true : false)),
      map(([heroes, search, page]) => 
        search && this.search.valid
          ? this.paginate(this.heroesService.filterHeroesFromFE(heroes,search), page)
          : this.paginate(heroes, page)
      ),
      tap((heroes) => !heroes && this.snackbarService.showMessage('Error loading heroes', false)),
      tap(() => this.spinner$.next(false))
    );
  }

  // In case there is no hero in the local data, we ask for it externally
  fillHeroesWithExternal(): void {
    this.spinner$.next(true);
    this.heroesService.getHeroes().pipe(
      take(1),
      switchMap((heroes) => 
        heroes?.length
          ? heroes
          : this.heroesService.initiateExternalHeroes()              
      )
    ).subscribe((success) => 
      !success
        ? this.snackbarService.showMessage('Error saving heroes of external api into local db', false) 
        : this.heroes$ = this.getListData()
    )
  }
 
  onPageChange(event: PageEvent) {
    this.currentPage$.next(event.pageIndex);
  }

  paginate(heroes: Hero[], page: number): Hero[] {
    this.totalListItems = heroes.length;
    const start = page * this.pageSize;
    const nextToShow = this.pageSize * (page+1);
    return heroes.slice(start, nextToShow);
  }

}
