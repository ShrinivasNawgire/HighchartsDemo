import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { CHART_TYPE, LINE_SERIES_CONFIGS, SCATTER_SERIES_CONFIGS, YAXIS_CONFIGS } from 'src/constants/chart.config.constant';
import { SeriesConfig } from 'src/constants/series.config';
const scatterSeries1 = require('./../assets/dummyJSON/scatterSeries1.json');
const scatterSeries2 = require('./../assets/dummyJSON/scatterSeries2.json');
const scatterSeries3 = require('./../assets/dummyJSON/scatterSeries3.json');
const scatterSeries4 = require('./../assets/dummyJSON/scatterSeries4.json');
const scatterSeries5 = require('./../assets/dummyJSON/scatterSeries5.json');
const scatterSeries6 = require('./../assets/dummyJSON/scatterSeries6.json');
const scatterSeries7 = require('./../assets/dummyJSON/scatterSeries7.json');
const scatterSeries8 = require('./../assets/dummyJSON/scatterSeries8.json');
const scatterSeries9 = require('./../assets/dummyJSON/scatterSeries9.json');
const scatterSeries10 = require('./../assets/dummyJSON/scatterSeries10.json');
const scatterSeries11 = require('./../assets/dummyJSON/scatterSeries11.json');
const scatterSeries12 = require('./../assets/dummyJSON/scatterSeries12.json');
const scatterSeries13 = require('./../assets/dummyJSON/scatterSeries13.json');

const lineSeries1 = require('./../assets/dummyJSON/lineSeries1.json');
// const lineSeries2 = require('./../assets/dummyJSON/lineSeries2.json');
const lineSeries3 = require('./../assets/dummyJSON/lineSeries31.json');
const lineSeries4 = require('./../assets/dummyJSON/lineSeries34.json');
const lineSeries5 = require('./../assets/dummyJSON/lineSeries35.json');


const columnSeries1 = require('./../assets/dummyJSON/columnSeries1.json');
const columnSeries2 = require('./../assets/dummyJSON/columnSeries2.json');

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
    const dataPoint = columnSeries1.data;

    return <Highcharts.SeriesColumnOptions>series
      .setAttr("data", dataPoint)
      .setAttr("yAxis", 1)
      .setAttr("zIndex", 0)
      .setAttr("legendIndex", 99)
      .setAttr("index", 0)
      .build();
  }

  getScatterSeries() {
    const AllScatterSeries: Array<any> = [];
    AllScatterSeries.push(scatterSeries1, scatterSeries2, scatterSeries3, scatterSeries4,
      scatterSeries5, scatterSeries6, scatterSeries7, scatterSeries8, scatterSeries9,
      scatterSeries10, scatterSeries11, scatterSeries12, scatterSeries13);

    return SCATTER_SERIES_CONFIGS.map(obj => {
      const series: SeriesConfig<Highcharts.SeriesScatterOptions> = new SeriesConfig<Highcharts.SeriesScatterOptions>(obj.chartId, CHART_TYPE.SCATTER);
      const seriesData = AllScatterSeries.find(series => series.seriesName === obj.chartId);
      // console.log(seriesData);
      if (!seriesData) {
        return;
      }
      series
        .setAttr("data", seriesData.data ? seriesData.data : [])
        .setAttr("color", obj.color)
        .setAttr("zIndex", 1);
        if (obj.symbol) {
          series.setMarkerShape(obj.symbol);
        }
        if (obj.index) {
          series.setAttr("index", obj.index);
        }
        series.setAttr("id", obj.chartId);
        if (obj.legendIndex) {
          series.setAttr("legendIndex", obj.legendIndex);
        }
        if (obj.marker) {
          series.setAttr("marker", obj.marker);
        }

        console.log(series);
        return series.build();
    });
  }

  getLineSeries() {
    let series: SeriesConfig<Highcharts.SeriesLineOptions> = new SeriesConfig<Highcharts.SeriesLineOptions>(lineSeries1, CHART_TYPE.LINE);

    const dataPoint = lineSeries1.data;

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
