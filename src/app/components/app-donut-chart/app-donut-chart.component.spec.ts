import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDonutChartComponent } from './app-donut-chart.component';

describe('AppDonutChartComponent', () => {
  let component: AppDonutChartComponent;
  let fixture: ComponentFixture<AppDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
