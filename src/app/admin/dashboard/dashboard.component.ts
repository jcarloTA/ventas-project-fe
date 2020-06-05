
import { Component, OnInit, OnDestroy, AfterContentInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

import { ViewChild } from '@angular/core';

// import { DonutChartComponent } from './../donut-chart/donut-chart.component';
// import * as HOBBITON from './hobbiton.json';
const HOBBITON = {
  "city": "shining-on-the-hill",
  "orderStates": [
    {
      "state": "preparing",
      "stateDisplayValue": "Preparing",
      "count": 10
    },
    {
      "state": "ready",
      "stateDisplayValue": "Ready",
      "count": 10
    },
    {
      "state": "inTransit",
      "stateDisplayValue": "Out for delivery",
      "count": 10
    },
    {
      "state": "delivered",
      "stateDisplayValue": "Delivered",
      "count": 10
    }
  ]
}

import { ChartControlsService } from '../../services/chart-controls-service/chart-controls-service.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppDonutChartComponent } from '../../components/app-donut-chart/app-donut-chart.component';


export class OrderState {
  state: string;
  stateDisplayValue: string;
  count: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('ordersByStatusChart', { static: true }) chart: AppDonutChartComponent;

  orderStates: OrderState[];

  chartData: number[] = [];

  displayedColumns = ['legend', 'orderStatus', 'total'];

  refreshInterval;


  constructor(public helpersService: HelpersService ,public chartControlsService: ChartControlsService,private router: Router) {
    this.helpersService.title = Titles.adminPanel;
    this.chartControlsService.fullScreen = false;

  }

  ngOnInit() {
  }


  initialize() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    this.generateData();
    this.chart.data = [...this.chartData];
    this.refreshInterval = setInterval(() => {
      if (document.hasFocus()) {
        this.updateStates();
        this.chart.data = [...this.chartData];
      }
    }, 1000);

  }
  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  ngAfterContentInit() {
    this.initialize();
  }

  generateData() {
    this.orderStates = [];
    HOBBITON.orderStates.forEach((state) => {
      const target = new OrderState();
      target.state = state.state;
      target.stateDisplayValue = state.stateDisplayValue;
      target.count = this.getRandomArbitrary(0, 100);
      this.orderStates.push(target);
    });
    this.chartData = [];
    this.orderStates.forEach((state) => {
      this.chartData.push(state.count);
    });
  }

  updateStates() {
    const increment = (val, plus, minus) => {
      return val + plus - minus;
    }
    const newOrders = this.getRandomArbitrary(0, 10);
    const newReady = this.getRandomArbitrary(0, Math.min(10, this.orderStates[0].count));
    const newTransit = this.getRandomArbitrary(0, Math.min(10, this.orderStates[1].count));
    const newDelivered = this.getRandomArbitrary(0, Math.min(10, this.orderStates[2].count));
    this.orderStates[0].count = increment(this.orderStates[0].count, newOrders, newReady);
    this.orderStates[1].count = increment(this.orderStates[1].count, newReady, newTransit);
    this.orderStates[2].count = increment(this.orderStates[2].count, newTransit, newDelivered);
    this.orderStates[3].count = increment(this.orderStates[3].count, newDelivered, 0);
    this.chartData = [];
    this.orderStates.forEach((state) => {
      this.chartData.push(state.count);
    });
  }

  navigateLeft() {
    this.router.navigate(['/delivery']);
  }

  navigateRight() {
    this.router.navigate(['/delivery']);
  }

  toggleData(event: MatSlideToggleChange) {
    this.chartControlsService.showData = event.checked;
  }
  getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
}
