import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { Hero, Response } from '../models/hero.model';
import { environments } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl = environments.heroesUrl;
  private externalHeroesUrl = environments.externalHeroesUrl;
  EXTERNAL_HEROES = 40;

  constructor(private http: HttpClient) { }

  // Used to dump data from the api to our database
  initiateExternalHeroes(): Observable<boolean> {
    return this.getExternalHeroesList().pipe(
      switchMap((heroes) => { 
        const heroRequest = heroes
          .filter(hero => !!hero && hero.response === Response.SUCCESS)
          .map((hero) => 
            this.http.post<Hero>(this.heroesUrl, hero).pipe(
              catchError(() => of(false)),
              map(() => true)
            )
          );

          return forkJoin(heroRequest).pipe(
            map((resutls) => resutls.some(result => result === true))
          );
        })
      );
  }

  getPublishers(): Observable<string[]> {
    const publishers: Observable<string>[] = [];
    for (let i = 1; i <= this.EXTERNAL_HEROES; i++) {
      const url = `${this.externalHeroesUrl}/${i}`;
      publishers.push(
        this.http.get<Hero>(url).pipe(
          map((hero) => hero.biography.publisher)
        )
      );
    }
    return forkJoin(publishers).pipe(
      map(publishers => Array.from(new Set(publishers)))
    );
  }

  getExternalHeroesList(): Observable<Hero[]> {
    const heroRequests: Observable<Hero>[] = [];
    // Since our API only brings one hero at a time, we will iterate to bring an array
    for (let id = 1; id <= this.EXTERNAL_HEROES; id++) {
      const url = `${this.externalHeroesUrl}/${id}`;
      heroRequests.push(this.http.get<Hero>(url));
    }

    return forkJoin(heroRequests);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    const url = this.heroesUrl + "/" + id;
    return this.http.get<Hero>(url).pipe(
      catchError(() => of(undefined)),
      map(hero => hero?.id ? hero : undefined)
    );
  }

  createHero(hero: Hero): Observable<Hero> {
    console.log("createhero: ", hero);
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw new Error("Id of hero is required");
    const url = this.heroesUrl + '/' + hero.id;
    return this.http.patch<Hero>(url, hero);
  }

  deleteHero(id: string): Observable<boolean> {
    const url = this.heroesUrl + '/' + id;
    return this.http.delete<boolean>(url)
    .pipe(
      catchError(() => of(false)),
      map(() => true)
    );
  }
}
