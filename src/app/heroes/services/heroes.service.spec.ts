import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesService } from './heroes.service';
import { environments } from 'src/environments/environments';
import { Alignment, Hero } from '../models/hero.model';


describe('HeroesService', () => {
  let service: HeroesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService]
    });
    service = TestBed.inject(HeroesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', () => {
    const dummyHeroes: Hero[] = [
      { 
        id: '1', 
        name: 'Hero One', 
        biography: { publisher: 'Publisher One', 
        alignment: Alignment.GOOD } 
      },
        { id: '2', 
        name: 'Hero Two', 
        biography: { publisher: 'Publisher Two', alignment: Alignment.BAD } 
      },
    ];

    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpMock.expectOne(environments.heroesUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHeroes);
  });

  it('should get hero by id', () => {
    const dummyHero: Hero = { 
      id: '1', 
      name: 'Hero One',
      biography: { publisher: 'Publisher One', alignment: Alignment.GOOD } 
    };

    service.getHeroById('1').subscribe(hero => {
      expect(hero).toEqual(dummyHero);
    });

    const req = httpMock.expectOne(`${environments.heroesUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHero);
  });

  it('should create a new hero', () => {
    const newHero: Hero = { 
      id: '3', 
      name: 'Hero Three', 
      biography: { publisher: 'Publisher Three', alignment: Alignment.GOOD } 
    };

    service.createHero(newHero).subscribe(hero => {
      expect(hero).toEqual(newHero);
    });

    const req = httpMock.expectOne(environments.heroesUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newHero);
  });

  it('should update a hero', () => {
    const updatedHero: Hero = { 
      id: '1', 
      name: 'Updated Hero', 
      biography: { publisher: 'Publisher One', alignment: Alignment.GOOD } 
    };

    service.updateHero(updatedHero).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
    });

    const req = httpMock.expectOne(`${environments.heroesUrl}/1`);
    expect(req.request.method).toBe('PATCH');
    req.flush(updatedHero);
  });

  it('should delete a hero', () => {
    service.deleteHero('1').subscribe(success => {
      expect(success).toBe(true);
    });

    const req = httpMock.expectOne(`${environments.heroesUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
