import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private componentNumber: number = 3;

  width = "100%";
  height = "250px";

  //pie
  type1 = 'pie3d';
  dataFormat1 = 'json';
  dataSource1;

  //line
  id2 = 'chart1';
  type2 = 'column2d';
  dataFormat2 = 'json';
  dataSource2;

  constructor() {
    this.dataSource1 = {
    "chart": {
      "caption": "Age profile of website visitors",
      "subcaption": "Last Year",
      "startingangle": "120",
      "showlabels": "0",
      "showlegend": "1",
      "enablemultislicing": "0",
      "slicingdistance": "15",
      "showpercentvalues": "1",
      "showpercentintooltip": "0",
      "plottooltext": "Age group : $label Total visit : $datavalue",
      "theme": "ocean"
  },
  "data": [
      {
          "label": "Teenage",
          "value": "1250400"
      },
      {
          "label": "Adult",
          "value": "1463300"
      },
      {
          "label": "Mid-age",
          "value": "1050700"
      },
      {
          "label": "Senior",
          "value": "491000"
      }
  ]
}

    this.dataSource2 = {
      "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Top 5 stores in last month by revenue",
        "numberprefix": "$",
        "theme": "fint"
      },
      "data": [
        {
          "label": "Bakersfield Central",
          "value": "880000"
        },
        {
          "label": "Garden Groove harbour",
          "value": "730000"
        },
        {
          "label": "Los Angeles Topanga",
          "value": "590000"
        },
        {
          "label": "Compton-Rancho Dom",
          "value": "520000"
        },
        {
          "label": "Daly City Serramonte",
          "value": "330000"
        }
      ]
    }
  }

  ngOnInit() {
  }




}
