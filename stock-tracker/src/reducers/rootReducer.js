const initialState = {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    companyOverview: "",
    price: null,
    chart: [],
    news: [],
    keyStats: {}
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'STOCK_RECEIVED':
            const stock = action.payload;
            console.log("stock in reducer:", stock)
            const keyStats = {
                previousClose:stock.previousClose,
                iexVolume:stock.iexVolume,
                marketCap:stock.marketCap,
                peRatio:stock.peRatio,
                week52Low:stock.week52Low,
                week52High:stock.week52High,
                avgTotalVolume:stock.avgTotalVolume,
                dividendYield:stock.stats.dividendYield,
                ttmEPS:stock.stats.ttmEPS,
                low:stock.low,
                high:stock.high,
                open:stock.open
            }
            return {
                ...state,
                symbol: stock.symbol,
                companyName: stock.companyName,
                companyOverview: stock.overview.description,
                price: stock.latestPrice,
                chart: stock.chart,
                news: stock.news,
                keyStats:keyStats
            }
        case 'NEWS_RECEIVED':
            console.log("news in NEWS_RECEIVED:", action.payload)
            return {
                ...state,
                news: action.payload
            }
        case 'PRICE_RECEIVED':
            console.log("price in PRICE_RECEIVED:", action.payload.latestPrice)   
             
            return {
                ...state,
                price: action.payload.latestPrice,
                chart: action.payload.chart
            }
        case 'STOCK_NOT_EXIST':
            console.log("stock does not exist")   
                
            return {
                ...state,
                companyName: 'Stock does not exist',
                symbol:'N/A'
            }
        default:
            return state;
    }
}