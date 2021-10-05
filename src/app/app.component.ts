import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
const scatterSeries1 = require('./../assets/dummyJSON/scatterSeries1');
const scatterSeries2 = require('./../assets/dummyJSON/scatterSeries2');
const scatterSeries3 = require('./../assets/dummyJSON/scatterSeries3');
const scatterSeries4 = require('./../assets/dummyJSON/scatterSeries4');
const scatterSeries5 = require('./../assets/dummyJSON/scatterSeries5');
const scatterSeries6 = require('./../assets/dummyJSON/scatterSeries6');
const scatterSeries7 = require('./../assets/dummyJSON/scatterSeries7');
const scatterSeries8 = require('./../assets/dummyJSON/scatterSeries8');
const scatterSeries9 = require('./../assets/dummyJSON/scatterSeries9');
const scatterSeries10 = require('./../assets/dummyJSON/scatterSeries10');
const scatterSeries11 = require('./../assets/dummyJSON/scatterSeries11');
const scatterSeries12 = require('./../assets/dummyJSON/scatterSeries12');
const scatterSeries13 = require('./../assets/dummyJSON/scatterSeries13');

const lineSeries1 = require('./../assets/dummyJSON/lineSeries1');
const lineSeries2 = require('./../assets/dummyJSON/lineSeries2');
const lineSeries3 = require('./../assets/dummyJSON/lineSeries31');
const lineSeries4 = require('./../assets/dummyJSON/lineSeries34');
const lineSeries5 = require('./../assets/dummyJSON/lineSeries35');


const columnSeries1 = require('./../assets/dummyJSON/columnSeries1');
const columnSeries2 = require('./../assets/dummyJSON/columnSeries2');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Highcharts demo";
  scatterSeriesAll: any;
  columnSeriesAll: any;
  lineSeriesAll: any;
  options: any;

  ngOnInit() {
    this.options = {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: ''
      },
      xAxis: {
        crosshair: true,
        type: 'datetime',
        minTickInterval: 1000,
        minRange: 10000,
        offset: 0,
        labels: {

        }
      },
      yAxis: this.getYAxis(),
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          states: {
            inactive: {
              opacity: 0.7
            }
          }
        },
        scatter: {
          marker: {
            states: {
              select: {
                fillColor: null,
                lineWidth: 1,
                lineColor: "black"
              }
            }
          },
          states: {
            inactive: {
              opacity: 0.7
            },
            select: {
              lineWidthPlus: 2
            }
          }
        },
        line: {
          states: {
            inactive: {
              opacity: 0.7
            },
          },
          series: {
            marker: {
              enabled: true
            },
            point: {
              events: {
                // mouseOut: () => { }
              }
            }
          }
        },
        legend: {
          enabled: false,
          layout: "vertical",
          align: "right",
          verticalAlign: "top",
          floating: true
        },
        tooltip: {
          style: {
            display: "none"
          }
        }
      },
      series: [{
        type: "line",
        name: "line series",
        boostThreshold: 1000,
        lineWidth: 1,
        turboThreshold: 1000,
        cropThreshold: 10000,
        step: "left",
        color: "green",
        marker: {
          enabled: true,
          radius: 2,
          symbol: "circle"
        },
        states: {
          hover: {
            lineWidth: 0
          }
        },
        enableMouseTracking: false,
        data: lineSeries1.lineSeries1
      }, {
        type: "scatter",
        name: "scatter series",
        clip: true,
        allowPointSelect: true,
        zIndex: 3,
        tooltip: {
          xDateFormat: "%H:%M:%S"
        },
        turboThreshold: 10000,
        lineWidth: 0,
        color: "red",
        marker: {
          radius: 4,
          symbol: "square",
          enabled: undefined,
          enabledThreshold: 0
        },
        data: scatterSeries1.scatterSeries1
      },
      {
        type: "column",
        name: "column series",
        boostThreshold: 10000,
        turboThreshold: 1000,
        cropThreshold: 1000,
        color: "#00bdf2",
        grouping: false,
        animationLimit: 1000,
        zIndex: 0,
        pointWidth: 0,
        maxPointWidth: 0,
        tooltip: {
          xDateFormat: "%H:%M:%S"
        },
        marker: {
          radius: 4
        },
        data: columnSeries1.columnSeries1
      }],
    }
  }

  ngAfterViewInit() {
    console.log(this.columnSeriesAll, this.lineSeriesAll, this.scatterSeriesAll);
    Highcharts.chart('container', this.options);
  }

  getYAxis() {
    return [{
      crosshair: {
        label: {
          enable: true,
          format: '{value:.2f}'
        }
      },
      title: {
        offset: 60,
        text: 'Price'
      },
      top: `0%`,
      height: `30%`,
      offset: 0,
    },
    {
      crosshair: {
        label: {
          enable: true,
          format: '{value:.2f}'
        }
      },
      title: {
        offset: 60,
        text: 'Price'
      },
      top: `33%`,
      height: `30%`,
      offset: 0,
    },
    {
      crosshair: {
        label: {
          enable: true,
          format: '{value:.2f}'
        }
      },
      title: {
        offset: 60,
        text: 'Volume'
      },
      top: `67%`,
      height: `30%`,
      offset: 0,
    },
  ];
  }
}
