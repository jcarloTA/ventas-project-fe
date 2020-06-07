import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { HelpersService } from "src/app/services/helpers/helpers.service";
import { Titles } from "src/app/shared/enums/titles.enum";

import { ChartControlsService } from "../../services/chart-controls-service/chart-controls-service.service";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label, BaseChartDirective } from "ng2-charts";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { NotificationService } from "src/app/services/notification/notification.service";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import * as moment from "moment"; // add this 1 of 4
import { CarritoService } from "src/app/services/carrito/carrito.service";
import { Pedido } from "src/app/shared/models/pedido";
import { isArray, isString } from 'util';

export class OrderState {
  state: string;
  stateDisplayValue: string;
  count: number;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };
  public barChartLabels: Label[] = [

  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  @ViewChild('baseChart', { static: false }) chart: BaseChartDirective;

  public barChartData: any[] = [
    {
      data: [],
      label: "Pedidos",
      backgroundColor: "#3f51b5",
    },
  ];
  private mySubject: BehaviorSubject<Pedido>;

  constructor(
    public helpersService: HelpersService,
    public chartControlsService: ChartControlsService,
    private notificationService: NotificationService,
    private carritoService: CarritoService
  ) {
    this.mySubject = new BehaviorSubject(null);
  }

  ngOnInit() {
    this.getPedidos();
    // realizar suscripcion
    this.doNotificationSubscription();

    // realizar subscription para subject (actualiza texto)
    this.doSubjectSubscription();
  }

  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  getPedidos() {
    this.carritoService
      .getAllPedidos()
      .subscribe((pedidos:any) => {
        pedidos.forEach(element => {
          this.mySubject.next(element);
        });
        console.log("pedidos", pedidos);
      });
  }

  public doNotificationSubscription(): void {
    try {
      this.notificationService.getPedidosNotifications()
      .pipe(
        map((e: any) => {
          console.log("map", e);
          if(e && e.fechaEntrega) {
            e.date = moment(e.fechaEntrega).format("DD/MM/YYYY");
          }
          return e;
        })
      )
      .subscribe((result) => {
        console.log("Mensaje recibido:", result);
        //actualizartabla
        this.mySubject.next(result);
      });
    } catch (e) {
      console.log(e);
    }
  }
  reloadChart() {
    if (this.chart !== undefined) {
      this.chart.chart.destroy();
      //this.chart.chart = 0;
      this.chart.datasets = this.barChartData;
      this.chart.labels = this.barChartLabels;
      this.chart.ngOnInit();
    }
  }


  public doSubjectSubscription(): void {
    this.mySubject
      .pipe(
        map((e: any) => {
          if(e && isString(e)) {
            e = JSON.parse(e);
          }
          if(e && e.fechaEntrega) {
            e.date = moment(e.fechaEntrega).format("DD/MM/YYYY");
          }
          return e;
        })
      )
      .subscribe((result) => {
        console.log(result)
        this.agregarDatoAGrafica(result)
      });
  }

  public agregarDatoAGrafica(pedido) {
    let encontro = false;
    let barLabelCopy = [...this.barChartLabels];
    let barDataCopy = [...this.barChartData[0].data];
    if(pedido) {
      barLabelCopy.forEach( (e, index) => {
        if(e == pedido.date) {
          encontro = true;
          barDataCopy[index] = !barDataCopy[index] ? 1 : barDataCopy[index] + 1;
        }
      })
      if(!encontro) {
        barLabelCopy.push(pedido.date);
        barDataCopy.push(1)
      }
    }
    console.log(barLabelCopy)
    console.log(barDataCopy)
    this.barChartData[0].data = barDataCopy;
    this.barChartLabels = barLabelCopy;
  }
}
