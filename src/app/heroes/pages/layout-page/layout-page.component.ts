import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { sidebarItem } from 'src/app/models/sidebar.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit, OnDestroy {

  // Todo: change into a service simulating that the data is from db
  sidebarItems$: Observable<sidebarItem[]> = of([
    { label: 'List', icon: 'label', url: './list'},
    { label: 'Add', icon: 'add', url: './new-hero'},
    { label: 'Search', icon: 'search', url: './search'},
  ]);

  subscription: Subscription = new Subscription();

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    // In case there is no hero in the local data, we ask for it externally
    this.subscription.add(
      this.heroesService.getHeroes().pipe(
        map((heroes) => 
          heroes?.length 
            ? heroes
            : this.heroesService.initiateExternalHeroes()
        )
      ).subscribe((success) => {
        if (!success) throw new Error("Error saving heroes of external api into local db");
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
