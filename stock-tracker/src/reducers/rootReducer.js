const initialState = {
    symbol: "",
    companyName: "",
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
            return {
                ...state,
                symbol: stock.symbol,
                companyName: stock.companyName,
                companyOverview: stock.overview.description,
                price: stock.latestPrice,
                chart: stock.chart,
                news: stock.news
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
        default:
            return state;
    }
}