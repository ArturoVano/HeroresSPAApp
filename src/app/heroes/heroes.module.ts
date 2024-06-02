import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ListHeroItemComponent } from './components/list-hero-item/list-hero-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';


@NgModule({
  declarations: [
    HeroPageComponent,
    ListPageComponent,
    NewHeroPageComponent,
    SearchPageComponent,
    LayoutPageComponent,
    ListHeroItemComponent,
    ConfirmDialogComponent,
    CapitalizeFirstPipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class HeroesModule { }
