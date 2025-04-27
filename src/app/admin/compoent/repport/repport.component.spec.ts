import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepportComponent } from './repport.component';

describe('RepportComponent', () => {
  let component: RepportComponent;
  let fixture: ComponentFixture<RepportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepportComponent]
    });
    fixture = TestBed.createComponent(RepportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
