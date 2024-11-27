import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageHeroesPageComponent } from './pages/manage-heroes-page/manage-heroes-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from '../shared/components/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'manage-heroes', component: ManageHeroesPageComponent }, 
      { path: 'edit/:id', component: ManageHeroesPageComponent }, 
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
