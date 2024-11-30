import { Component} from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { sidebarItem } from 'src/app/models/sidebar.model';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'] 
})
export class LayoutPageComponent {

  sidebarItems$: Observable<sidebarItem[]> = of([
    { label: 'List', icon: 'label', url: './list'},
    { label: 'Add', icon: 'add', url: './manage-heroes'},
  ]);

  showLogout = false;

  user$ = this.authService.getUserLoged();

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
