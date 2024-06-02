import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroItemComponent } from './list-hero-item.component';

describe('ListHeroItemComponent', () => {
  let component: ListHeroItemComponent;
  let fixture: ComponentFixture<ListHeroItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHeroItemComponent]
    });
    fixture = TestBed.createComponent(ListHeroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
