import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'list-hero-item',
  templateUrl: './list-hero-item.component.html',
  styleUrls: ['./list-hero-item.component.css']
})
export class ListHeroItemComponent {

  @Input() hero?: Hero

}
