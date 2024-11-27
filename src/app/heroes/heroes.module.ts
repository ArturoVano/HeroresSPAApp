import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ManageHeroesPageComponent } from './pages/manage-heroes-page/manage-heroes-page.component';
import { LayoutPageComponent } from '../shared/components/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ListHeroItemComponent } from './components/list-hero-item/list-hero-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';


@NgModule({
  declarations: [
    HeroPageComponent,
    ListPageComponent,
    ManageHeroesPageComponent,
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
