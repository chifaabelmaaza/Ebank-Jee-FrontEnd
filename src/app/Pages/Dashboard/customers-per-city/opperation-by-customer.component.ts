import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-customer-per-city',
  templateUrl: './opperation-by-customer.component.html',
  styleUrls: ['./opperation-by-customer.component.scss']
})
export class OpperationByCustomerComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Custumers By City'
    },
    xAxis: {
      categories: [
        'Casablanca',
        'Rabat',
        'Tanger',
        'Agadir',
        'Marrakech',
      ]
    },
    yAxis: {
      title: {
        text: 'Custumers in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Casablanca',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Rabat',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Agadir',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Tanger',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Marrakech',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
