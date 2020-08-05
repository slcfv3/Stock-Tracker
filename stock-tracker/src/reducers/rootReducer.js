const initialState = {
    symbol: "",
    companyName: "",
    overview: "",
    price: 0,
    priceChange: 0,
    priceChangePercent: 0,
    chart: [],
    coldChart: {},
    news: [],
    keyStats: {},
    peer: [],
    possible:[],
    isLoading: false
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STOCK_RECEIVED':
            const stock = action.payload

            const keyStats = {
                previousClose: stock.previousClose,
                iexVolume: stock.iexVolume,
                marketCap: stock.marketCap,
                peRatio: stock.peRatio,
                week52Low: stock.week52Low,
                week52High: stock.week52High,
                avgTotalVolume: stock.avgTotalVolume,
                dividendYield: stock.stats.dividendYield,
                ttmEPS: stock.stats.ttmEPS,
                low: stock.low,
                high: stock.high,
                open: stock.open

            }
            return {
                ...state,
                symbol: stock.symbol,
                companyName: stock.companyName,
                overview: stock.overview,
                price: stock.latestPrice,
                priceChange: stock.change,
                priceChangePercent: stock.changePercent,
                chart: stock.chart,
                coldChart: stock.coldcharts,
                news: stock.news,
                keyStats: keyStats,
                peer: stock.peers,
                possible:[],
                isLoading: false
            }
        case 'SEARCH_SUBMITTED':
            return {
                ...state,
                isLoading: true
            }
        case 'NEWS_RECEIVED':
            console.debug("news in NEWS_RECEIVED:", action.payload)
            return {
                ...state,
                news: action.payload
            }
        case 'PRICE_RECEIVED':
            console.warn("chart in PRICE_RECEIVED:", action.payload.chart)
            console.info("price in PRICE_RECEIVED:", action.payload.latestPrice)

            return {
                ...state,
                price: action.payload.latestPrice,
                priceChange: action.payload.change,
                priceChangePercent: action.payload.changePercent,
                chart: action.payload.chart
            }
        case 'POSSIBLE_RECEIVED':
            //console.log("possible in POSSIBLE_RECEIVED:", action.payload)
            return {
                ...state,
                possible: action.payload
            }
        default:
            return state;
    }
}