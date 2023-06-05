import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;
  a: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data: string[] = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {}

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Function Graph',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          },
        ],
      },
    });
  }
  graphras(xn: any, xk: any, a: any, h: any) {
    this.data = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);

    let x: number, y: number;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();

    while (x < this.xk) {
      if (x <= 0) {
        y = x ** 3 - Math.log10(Math.abs(x) + 1);
      } else {
        if (x <= this.a) {
          y = (2 * x + 2) / (Math.tan(2 * x - 1) + 1);
        } else {
          y = x ** 4 - x ** x;
        }
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = 'x= ' + x.toFixed(1) + 'y= ' + y.toFixed(1);
      this.data.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();
  }
}
