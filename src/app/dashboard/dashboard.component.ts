import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dailyData:any;
  pieOptions:any;
  weeklyData:any;
  monthlyData: any;
  addClassTo:string ='daily'
  defaultClass:string =''

  constructor() {

      this.dailyData = {
          labels: ['Patients Visited', 'Internal Patients'],
          datasets: [
              {
                  data: [300, 50],
                  backgroundColor: [
                      '#FFC107',
                      '#03A9F4',
                      '#4CAF50'
                  ],
                  hoverBackgroundColor: [
                      '#FFE082',
                      '#81D4FA',
                      '#A5D6A7'
                  ]
              }]
          };
      this.pieOptions = {
          legend: {
              position: 'right',
          
          }
      };


      this.monthlyData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
          datasets: [
              {
                  label: 'Patients Visited',
                  data: [65, 59, 80, 81, 56, 55, 40,30,40,50,60,70],
                  backgroundColor: [
                      '#FFC107'
                  ],
                  hoverBackgroundColor: [
                      '#FFE082'
                  ]
              }
              
          ]
      }

      this.weeklyData= {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
              {
                  label: 'Patients Visited',
                  data: [65, 59, 80, 81, 56, 55],
                  backgroundColor: [
                     // '#FFC107',
                      //'#03A9F4',
                      '#4CAF50'
                  ],
                  hoverBackgroundColor: [
                     // '#FFE082',
                      //'#81D4FA',
                      '#A5D6A7'
                  ]
              }
              // {
              //     label: 'Second Dataset',
              //     data: [28, 48, 40, 19, 86, 27]
              // }
          ]
      }
  }

  ngOnInit() {
  }

  getTabName(tabName:any): void {
     if(tabName == 'daily'){
      this.addClassTo = 'daily'
     }
     if(tabName == 'weekly'){
      this.addClassTo = 'weekly'
     }
     if(tabName == 'monthly'){
      this.addClassTo = 'monthly'
     }
  }



}
