import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PructosListComponent } from './pructos-list.component';

describe('PructosListComponent', () => {
  let component: PructosListComponent;
  let fixture: ComponentFixture<PructosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PructosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PructosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
