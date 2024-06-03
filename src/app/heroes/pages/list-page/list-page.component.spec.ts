import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPageComponent } from './list-page.component';
import { HeroesService } from '../../services/heroes.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../../models/hero.model';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  let heroesService: jasmine.SpyObj<HeroesService>;
  let snackbarService: jasmine.SpyObj<SnackbarService>;

  beforeEach(async () => {
    const heroesServiceSpy = jasmine.createSpyObj('HeroesService', ['getHeroes', 'initiateExternalHeroes']);
    const snackbarServiceSpy = jasmine.createSpyObj('SnackbarService', ['showMessage']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ListPageComponent],
      providers: [
        { provide: HeroesService, useValue: heroesServiceSpy },
        { provide: SnackbarService, useValue: snackbarServiceSpy }
      ]
    }).compileComponents();

    heroesService = TestBed.inject(HeroesService) as jasmine.SpyObj<HeroesService>;
    snackbarService = TestBed.inject(SnackbarService) as jasmine.SpyObj<SnackbarService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe on destroy', () => {
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });

  it('should fill heroes and handle success', () => {
    heroesService.getHeroes.and.returnValue(of([]));
    heroesService.initiateExternalHeroes.and.returnValue(of(true));

    component.fillHeroes();
    fixture.detectChanges();

    expect(heroesService.initiateExternalHeroes).toHaveBeenCalled();
    expect(snackbarService.showMessage).not.toHaveBeenCalled();
  });

  it('should fill heroes and handle error', () => {
    heroesService.getHeroes.and.returnValue(of([]));
    heroesService.initiateExternalHeroes.and.returnValue(of(false));

    component.fillHeroes();
    fixture.detectChanges();

    expect(snackbarService.showMessage).toHaveBeenCalledWith('Error saving heroes of external api into local db', false);
  });

  it('should get list data and handle search', () => {
    const mockHeroes: Hero[] = [
      { name: 'Hero 1', biography: { publisher: 'Publisher' } } as Hero,
      { name: 'Another Hero', biography: { publisher: 'Publisher' } } as Hero
    ];
    heroesService.getHeroes.and.returnValue(of(mockHeroes));

    component.getListData().subscribe((heroes) => {
      expect(heroes).toEqual(mockHeroes);
    });

    component.search.setValue('Hero 1');
    fixture.detectChanges();

    component.getListData().subscribe((heroes) => {
      expect(heroes).toEqual([mockHeroes[0]]);
    });

    expect(component.spinner$.value).toBe(false);
  });
});
