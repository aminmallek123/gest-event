import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailseventComponent } from './detailsevent.component';

describe('DetailseventComponent', () => {
  let component: DetailseventComponent;
  let fixture: ComponentFixture<DetailseventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailseventComponent]
    });
    fixture = TestBed.createComponent(DetailseventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
