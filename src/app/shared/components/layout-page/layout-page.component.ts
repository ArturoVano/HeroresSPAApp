import { Component} from '@angular/core';
import { Observable, of } from 'rxjs';
import { sidebarItem } from 'src/app/models/sidebar.model';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  sidebarItems$: Observable<sidebarItem[]> = of([
    { label: 'List', icon: 'label', url: './list'},
    { label: 'Add', icon: 'add', url: './manage-heroes'},
  ]);

}
