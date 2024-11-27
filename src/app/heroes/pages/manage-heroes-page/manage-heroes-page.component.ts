import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { BehaviorSubject, Observable, Subscription, filter, switchMap, tap } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../models/hero.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/dialogs/delete-dialog/delete-dialog.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Alignment } from 'src/app/models/aligment.model';

@Component({
  selector: 'app-manage-heroes-page',
  templateUrl: './manage-heroes-page.component.html',
  styleUrls: ['./manage-heroes-page.component.css']
})
export class ManageHeroesPageComponent implements OnInit, OnDestroy {

  publishers$: Observable<string[]> = this.heroesService.getPublishers();

  alignments = [Alignment.GOOD, Alignment.BAD];

  get heroId(): FormControl {
    return this.heroForm.get('id') as FormControl;
  }

  get heroName(): FormControl {
    return this.heroForm.get('name') as FormControl;
  }

  get heroImg(): FormControl {
    return this.heroForm.get('img') as FormControl;
  }

  heroForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    fullName: [''],
    alterEgo: [''],
    firstAppearance: [''],
    aliases: [''],
    publisher: ['', Validators.required],
    alignment: ['', Validators.required],
    img: [''],
  })

  spinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  subscription: Subscription = new Subscription();

  @ViewChild('nameInput') nameInput?: ElementRef

  constructor( 
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackbarService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {

    if (!this.router.url?.includes('edit')) {
      this.spinner$.next(false)
      return
    };

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id))
    ).subscribe((hero) => {
      if (!hero) {
        this.router.navigateByUrl('/') 
        this.snackbarService.showMessage("Error loading hero for editing", false);
      } else {
        this.populateFormWithHero(hero);
      }
      this.spinner$.next(false);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.heroId?.value) {
      this.subscription.add(
        this.heroesService.updateHero(this.buildHeroWithForm())
        .subscribe((hero) => {
            this.snackbarService.showMessage(`${hero.name} has been updated!`);
            this.router.navigate(['/heroes/list']);
          }
        )
      );
    } else {
      this.subscription.add(
        this.heroesService.createHero(this.buildHeroWithForm())
        .subscribe((hero) => {
          this.snackbarService.showMessage(`${hero.name} has been created!`);
          this.router.navigate(['/heroes/list']);
          }
        )
      );
    }
  }

  populateFormWithHero(hero: Hero): void {
    this.heroForm.reset({
      id: hero.id ,
      name: hero.name,
      fullName: hero.biography["full-name"],
      alterEgo: hero.biography["alter-egos"],
      firstAppearance: hero.biography["first-appearance"], 
      aliases: hero.biography.aliases ? hero.biography.aliases.join(',') : '',
      publisher: hero.biography.publisher,
      alignment: hero.biography.alignment,
      img: hero.image ? hero.image.url : ''
    });
  }

  buildHeroWithForm(): Hero {
    if (this.heroId.value) {
      return {
        ...this.heroForm.value,
        biography: {
          "full-name": this.heroForm.value.fullName,
          "alter-egos": this.heroForm.value.alterEgo,
          aliases: this.heroForm.value.aliases ? this.heroForm.value.aliases.split(',') : [],
          "first-appearance": this.heroForm.value.firstAppearance,
          publisher: this.heroForm.value.publisher,
          alignment: this.heroForm.value.alignment,
        },
        image: {
          url: this.heroForm.value.img
        }
      } as Hero;
    }
    return {
      name: this.heroName.value,
      biography: {
        "full-name": this.heroForm.value.fullName,
        "alter-egos": this.heroForm.value.alterEgo,
        aliases: this.heroForm.value.aliases ? this.heroForm.value.aliases.split(',') : [],
        "first-appearance": this.heroForm.value.firstAppearance,
        publisher: this.heroForm.value.publisher,
        alignment: this.heroForm.value.alignment,
      },
      image: {
        url: this.heroForm.value.img
      }
    } as Hero;
  }

  goBack(): void {
    this.router.navigate(['heroes/list']);
  }

  deleteHero() {
    if (!this.heroId.value) {
      this.snackbarService.showMessage(`Hero id is required`);
    };

    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });
    this.subscription.add(
      dialogRef.afterClosed().pipe(
        filter(response => !!response),
        switchMap(() => this.heroesService.deleteHero(this.heroId.value)),
        tap(result => {
          if (result) {
            this.snackbarService.showMessage(`${this.heroName.value} has been deleted!`);
            this.router.navigate(['/heroes/list']);
          } else {
            this.snackbarService.showMessage(`A problem occurred while deleting the hero
            ${this.heroName.value}`);
          }
        })
      ).subscribe()
    );
  }
}
