const initialState = {
    symbol: "",
    companyName: "",
    companyOverview: "",
    price: null,
    news: {}, // NOT changed by this reducer
    keyStats: {} // NOT changed by this reducer
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'STOCK_RECEIVED':
            const stock = action.payload;
            console.log("stock in reducer:", stock)
            return {
                ...state,
                stockSymbol: stock.symbol,
                companyName: stock.companyName,
                companyOverview: stock.overview.description,
                price: stock.latestPrice
            }
        case 'NEWS_RECEIVED':
            console.log("news in NEWS_RECEIVED:", action.payload)
            return {
                ...state,
                news: action.payload
            }

        default:
            return state;
    }
}