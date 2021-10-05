const LINE_SERIES: Highcharts.SeriesLineOptions = {
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
}

const SCATTER_SERIES: Highcharts.SeriesScatterOptions = {
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
}

const COLUMN_SERIES: Highcharts.SeriesColumnOptions = {
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
}