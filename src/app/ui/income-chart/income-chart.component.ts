import { Component,ElementRef, OnInit,AfterViewInit, ViewChild  } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.css']
})
export class IncomeChartComponent {
  @ViewChild('incomeChart') incomeChartRef!: ElementRef;

  constructor() { }

 
  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const ctx = this.incomeChartRef.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Monthly Income',
          data: [1000, 1200, 1500, 1300, 1700, 2000, 1800, 1900, 2200, 2500, 2300, 2700],
          
          borderColor: 'rgb(75, 192, 192)',
         
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
