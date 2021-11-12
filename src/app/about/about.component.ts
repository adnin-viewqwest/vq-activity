import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { GoogleChartInterface, GoogleChartsControlInterface, GoogleChartsDashboardInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  public categoryPicker: GoogleChartsControlInterface = {
    controlType: 'CategoryFilter',
    options: {
      filterColumnIndex: 1,
      ui: {
        labelStacking: 'vertical',
        label: 'Gender Selection:',
        allowTyping: false,
        allowMultiple: false
      }
    }
  };

  public slider: GoogleChartsControlInterface = {
    controlType: 'NumberRangeFilter',
    options: {
      filterColumnIndex: 2,
      ui: {
        labelStacking: 'vertical',
        label: 'Age Filter:'
      }
    }
  };

  public dashboardPieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    options: {
      width: 250,
      height: 250,
      legend: 'none',
      chartArea: {left: 15, top: 15, right: 0, bottom: 0},
      pieSliceText: 'label'
    },
    view: {columns: [0, 3]}
  };

  public dashboardTable: GoogleChartInterface = {
    chartType: 'Table',
    options: {
      alternatingRowStyle: true,
      showRowNumber : true,
      allowHtml: true,
    },
  };

  public dashboard: GoogleChartsDashboardInterface = {
    dataTable: [
      ['Name', 'Gender', 'Age', 'Donuts eaten'],
      ['Michael' , 'Male', 12, 5],
      ['Elisa', 'Female', 20, 7],
      ['Robert', 'Male', 7, 3],
      ['John', 'Male', 54, 2],
      ['Jessica', 'Female', 22, 6],
      ['Aaron', 'Male', 3, 1],
      ['Margareth', 'Female', 42, 8],
      ['Miranda', 'Female', 33, 6]
    ],
    formatters: [
      {
        columns: [3],
        type: 'ArrowFormat',
        options: {
          base: 5,
        },
      },
    ],
    bind: [
      [
        [this.slider, this.categoryPicker],
        [this.dashboardPieChart, this.dashboardTable]
      ]
    ],
  };

  public toggleRowNumbers() {
    this.dashboardTable.options.showRowNumber = !this.dashboardTable.options.showRowNumber;
    if(this.dashboard.component) {
      this.dashboard.component.draw();
    }
  }

  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
