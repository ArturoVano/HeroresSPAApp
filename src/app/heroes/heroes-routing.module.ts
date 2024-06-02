import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewHeroPageComponent }, 
      { path: 'edit/:id', component: NewHeroPageComponent }, 
      { path: 'search', component: SearchPageComponent }, 
      { path: 'list', component: ListPageComponent }, 
      { path: 'hero/:id', component: HeroPageComponent },
      { path: '**', redirectTo: 'list' } 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }