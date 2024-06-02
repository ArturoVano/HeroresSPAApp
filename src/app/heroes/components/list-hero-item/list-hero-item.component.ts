import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'list-hero-item',
  templateUrl: './list-hero-item.component.html',
  styleUrls: ['./list-hero-item.component.css']
})
export class ListHeroItemComponent implements OnInit {

  @Input() hero?: Hero

  ngOnInit(): void {
    if (!this.hero) throw new Error("Hero is missing");
  }

}
