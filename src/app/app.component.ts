import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { CHART_TYPE, YAXIS_CONFIGS } from 'src/constants/chart.config.constant';
import { SeriesConfig } from 'src/constants/series.config';
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
    const SERIES = this.getSeries();

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
      series: [...SERIES]
    }
  }

  ngAfterViewInit() {
    // console.log(this.columnSeriesAll, this.lineSeriesAll, this.scatterSeriesAll);
    Highcharts.chart('container', this.options);
  }

  getSeries() {
    const columnSeries = this.getColumnSeries();
    const scatterSeries = this.getScatterSeries();
    const lineSeries = this.getLineSeries();
    return [columnSeries, scatterSeries, lineSeries];
  }

  getColumnSeries() {
    let series: SeriesConfig<Highcharts.SeriesColumnOptions> = new SeriesConfig<Highcharts.SeriesColumnOptions>(columnSeries1, CHART_TYPE.COLUMN);
    const dataPoint = columnSeries1.columnSeries1;

    return <Highcharts.SeriesColumnOptions>series
      .setAttr("data", dataPoint)
      .setAttr("color", "orange")
      .setAttr("yAxis", 1)
      .setAttr("zIndex", 0)
      .build();
  }

  getScatterSeries() {
    let series: SeriesConfig<Highcharts.SeriesScatterOptions> = new SeriesConfig<Highcharts.SeriesScatterOptions>(scatterSeries1, CHART_TYPE.SCATTER);
    const dataPoint = scatterSeries1.scatterSeries1;

    return <Highcharts.SeriesScatterOptions>series
      .setAttr("data", dataPoint)
      .setAttr("color", "red")
      .setAttr("yAxis", 1)
      .setAttr("zIndex", 0)
      .build();
  }

  getLineSeries() {
    let series: SeriesConfig<Highcharts.SeriesLineOptions> = new SeriesConfig<Highcharts.SeriesLineOptions>(lineSeries1, CHART_TYPE.LINE);

    const dataPoint = lineSeries1.lineSeries1;

    return <Highcharts.SeriesLineOptions>series
      .setAttr("data", dataPoint)
      .setAttr("color", "green")
      .setAttr("yAxis", 0)
      .setAttr("zIndex", 0)
      .setAttr("legendIndex", 99)
      .build();
  }

  getYAxis() {
    return YAXIS_CONFIGS;
  }
}
