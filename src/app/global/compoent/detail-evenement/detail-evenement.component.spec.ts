import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEvenementComponent } from './detail-evenement.component';

describe('DetailEvenementComponent', () => {
  let component: DetailEvenementComponent;
  let fixture: ComponentFixture<DetailEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEvenementComponent]
    });
    fixture = TestBed.createComponent(DetailEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
