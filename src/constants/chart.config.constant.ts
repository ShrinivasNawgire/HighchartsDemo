export enum CHART_TYPE {
    LINE = "LINE",
    COLUMN = "COLUMN",
    SCATTER = "SCATTER"
}

export enum MARKER_SYMBOL {
    TRIANGLE = "triangle",
    SQUARE = "square",
    CIRCLE = "circle",
    DIAMOND = "diamond",
    LINE = "line"
}

export enum SERIES_COLORS {
    GREY = "gray",
    ORANGE = "orange",
    GREEN = "green",
    RED = "red",
    VIOLET = "violet",
    BLUE = "blue",
    BLACK = "black"
}

export const SCATTER_SERIES_CONFIGS: Array<any> = [
    { name: 'Scatter Series 1', chartId: "scatterSeries1", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.GREEN },
    { name: 'Scatter Series 2', chartId: "scatterSeries2", index: 2, legendIndex: 2, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.GREY },
    { name: 'Scatter Series 3', chartId: "scatterSeries3", index: 3, legendIndex: 3, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.ORANGE },
    { name: 'Scatter Series 4', chartId: "scatterSeries4", index: 4, legendIndex: 4, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.RED },
    { name: 'Scatter Series 5', chartId: "scatterSeries5", index: 5, legendIndex: 5, symbol: MARKER_SYMBOL.TRIANGLE, color: SERIES_COLORS.GREEN },
    { name: 'Scatter Series 6', chartId: "scatterSeries6", index: 6, legendIndex: 6, symbol: MARKER_SYMBOL.TRIANGLE, color: SERIES_COLORS.GREY },
    { name: 'Scatter Series 7', chartId: "scatterSeries7", index: 7, legendIndex: 7, symbol: MARKER_SYMBOL.TRIANGLE, color: SERIES_COLORS.ORANGE },
    { name: 'Scatter Series 8', chartId: "scatterSeries8", index: 8, legendIndex: 8, symbol: MARKER_SYMBOL.TRIANGLE, color: SERIES_COLORS.RED },
    { name: 'Scatter Series 9', chartId: "scatterSeries9", index: 9, legendIndex: 9, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.GREEN },
    { name: 'Scatter Series 10', chartId: "scatterSeries10", index: 10, legendIndex: 10, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.GREY },
    { name: 'Scatter Series 11', chartId: "scatterSeries11", index: 11, legendIndex: 11, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.ORANGE },
    { name: 'Scatter Series 12', chartId: "scatterSeries12", index: 12, legendIndex: 12, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.RED },
    { name: 'Scatter Series 13', chartId: "scatterSeries13", index: 13, legendIndex: 13, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.GREEN }
]

export const LINE_SERIES_CONFIGS: Array<any> = [
    { name: 'Line Series 1', type: CHART_TYPE.LINE, chartId: "lineSeries1", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.LINE, color: SERIES_COLORS.BLUE },
    { name: 'Line Series 2', type: CHART_TYPE.LINE, chartId: "lineSeries2", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.LINE, color: SERIES_COLORS.BLACK },
    { name: 'Line Series 3', type: CHART_TYPE.LINE, chartId: "lineSeries3", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.LINE, color: SERIES_COLORS.VIOLET },
    { name: 'Line Series 4', type: CHART_TYPE.LINE, chartId: "lineSeries4", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.LINE, color: SERIES_COLORS.VIOLET },
    { name: 'Line Series 5', type: CHART_TYPE.LINE, chartId: "lineSeries5", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.LINE, color: SERIES_COLORS.VIOLET },
    { name: 'Line Series 6', type: CHART_TYPE.LINE, chartId: "lineSeries6", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.LINE, color: SERIES_COLORS.VIOLET },
]

export const COLUMN_SERIS_CONFIGS: Array<any> = [
    { name: 'Column Series 1', type: CHART_TYPE.COLUMN, chartId: "columnSeries1", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.BLUE },
    { name: 'Column Series 2', type: CHART_TYPE.COLUMN, chartId: "columnSeries2", index: 1, legendIndex: 1, symbol: MARKER_SYMBOL.SQUARE, color: SERIES_COLORS.BLACK }
]