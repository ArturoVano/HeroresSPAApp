import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutPageComponent } from '../shared/components/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '**',
    component: LayoutPageComponent,
    children: [
      { path: '', component: AuthComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
