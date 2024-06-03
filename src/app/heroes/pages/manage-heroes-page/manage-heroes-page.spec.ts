import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageHeroesPageComponent } from './manage-heroes-page.component';
import { HeroesService } from '../../services/heroes.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Hero, Alignment } from '../../models/hero.model';
import { MaterialModule } from 'src/app/material/material.module';
import { Call } from '@angular/compiler';

describe('ManageHeroesPageComponent', () => {
  let component: ManageHeroesPageComponent;
  let fixture: ComponentFixture<ManageHeroesPageComponent>;
  let heroesService: jasmine.SpyObj<HeroesService>;
  let snackbarService: jasmine.SpyObj<SnackbarService>;
  let matDialog: jasmine.SpyObj<MatDialog>;
  let router: Router;
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
      alignment: Alignment.GOOD,
    },
    image: {
      url: 'superman.jpg'
    }
  };

  const mockHeroTwo: Hero = { 
    name: 'Batman', 
    biography: { publisher: 'DC Comic', alignment: Alignment.GOOD }
  } as Hero;

  beforeEach(async () => {
    const heroesServiceSpy = jasmine.createSpyObj('HeroesService', ['getHeroById', 'getPublishers', 'updateHero', 'createHero', 'deleteHero']);
    const snackbarServiceSpy = jasmine.createSpyObj('SnackbarService', ['showMessage']);
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);

    activatedRoute = { params: of({ id: '1' }) };

    await TestBed.configureTestingModule({
      declarations: [ManageHeroesPageComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: HeroesService, useValue: heroesServiceSpy },
        { provide: SnackbarService, useValue: snackbarServiceSpy },
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute },
        FormBuilder
      ]
    }).compileComponents();

    heroesService = TestBed.inject(HeroesService) as jasmine.SpyObj<HeroesService>;
    snackbarService = TestBed.inject(SnackbarService) as jasmine.SpyObj<SnackbarService>;
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    router = { ...TestBed.inject(Router), url: 'edit/1' } as Router;

    heroesService.getHeroById.and.returnValue(of(mockHero));
    heroesService.getPublishers.and.returnValue(of(['DC Comics', 'Marvel Comics']));
    heroesService.updateHero.and.returnValue(of(mockHero));
    heroesService.createHero.and.returnValue(of(mockHero));
    heroesService.deleteHero.and.returnValue(of(true));

    fixture = TestBed.createComponent(ManageHeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate form with hero data on init if edit mode', () => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.heroForm.value.name).toEqual(mockHero.name);
    }, 1000);
  });

  it('should call createHero on submit if no hero ID', () => {
    component.heroForm.patchValue(mockHeroTwo);
    component.onSubmit();
    setTimeout(() => {
      expect(heroesService.createHero).toHaveBeenCalled();
    }, 1000);
  });

  it('should call updateHero on submit if hero ID exists', () => {
    component.heroForm.patchValue(mockHero);
    component.onSubmit();
    setTimeout(() => {
      expect(heroesService.updateHero).toHaveBeenCalled();
    }, 1000);
  });

  it('should call snackbar message on successful update', () => {
    component.heroForm.patchValue(mockHero);
    component.onSubmit();
    setTimeout(() => {
      expect(snackbarService.showMessage).toHaveBeenCalledWith('Batman has been updated!');
    }, 1000);
  });

  it('should navigate to hero list on successful creation', () => {
    component.heroForm.patchValue(mockHeroTwo);
    component.onSubmit();
    setTimeout(() => {
      expect(router.navigate).toHaveBeenCalledWith(['/heroes/list']);
    }, 1000);
  });

  it('should open dialog on deleteHero and on confirm', () => {
    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of(true) });
    matDialog.open.and.returnValue(dialogRefSpyObj);
    component.heroForm.patchValue(mockHero);
    component.deleteHero();
    expect(matDialog.open).toHaveBeenCalled();
    expect(heroesService.deleteHero).toHaveBeenCalledWith('1');
    expect(snackbarService.showMessage).toHaveBeenCalledWith('Superman has been deleted!');
  });

  it('should navigate to hero list on goBack', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['heroes/list']);
  });
});