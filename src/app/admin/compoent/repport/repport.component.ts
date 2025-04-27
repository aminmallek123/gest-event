import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-repport',
  templateUrl: './repport.component.html',
  styleUrls: ['./repport.component.css']
})
export class RepportComponent {
  timeFrame = 'This month';

  labels = ["", "", "", "", "q1", "", "", "", "", "q2", "", "", "", "", "q3", "", "", "", "", "q4", ""];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        label: 'annuler',
        data: this.labels.map(() => Math.floor(Math.random() * 40) - 60),
        backgroundColor: 'rgba(112, 127, 221, 0.8)',
        stack: 'Stack 0'
      },
      {
        label: 'confirmer',
        data: this.labels.map(() => Math.floor(Math.random() * 40) + 20),
        backgroundColor: 'rgba(230, 151, 255, 0.8)',
        stack: 'Stack 0'
      }
    ]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        min: -60,
        max: 60,
        ticks: {
          stepSize: 40,
          callback: (value) => value.toString()
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8
        }
      }
    }
  };
}
