import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroPageComponent } from './hero-page.component';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Hero } from '../../models/hero.model';

describe('HeroPageComponent', () => {
  let component: HeroPageComponent;
  let fixture: ComponentFixture<HeroPageComponent>;
  let heroesService: jasmine.SpyObj<HeroesService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: any;

  const mockHero: Hero = {
    id: '1',
    name: 'Superman',
    biography: {
      "full-name": 'Clark Kent',
      "alter-egos": 'None',
      aliases: ['Man of Steel'],
      "first-appearance": 'Action Comics #1',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    image: {
      url: 'superman.jpg'
    }
  };

  beforeEach(async () => {
    const heroesServiceSpy = jasmine.createSpyObj('HeroesService', ['getHeroById']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    activatedRoute = { params: of({ id: '1' }) };

    await TestBed.configureTestingModule({
      declarations: [HeroPageComponent],
      providers: [
        { provide: HeroesService, useValue: heroesServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    }).compileComponents();

    heroesService = TestBed.inject(HeroesService) as jasmine.SpyObj<HeroesService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    heroesService.getHeroById.and.returnValue(of(mockHero));

    fixture = TestBed.createComponent(HeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch hero on init and populate hero$', () => {
    component.hero$.subscribe(hero => {
      expect(hero).toEqual(mockHero);
    });
    expect(heroesService.getHeroById).toHaveBeenCalledWith('1');
  });

  it('should navigate to heroes list if hero is not found', () => {
    heroesService.getHeroById.and.returnValue(of(undefined));
    component.hero$.subscribe();
    expect(router.navigate).toHaveBeenCalledWith(['/heroes/list']);
  });

  it('should set spinner$ to false after fetching hero', () => {
    component.hero$.subscribe(() => {
      expect(component.spinner$.value).toBe(false);
    });
  });

  it('should navigate to heroes list on goBack', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['heroes/list']);
  });
});