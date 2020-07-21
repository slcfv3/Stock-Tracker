import { select, put, fork, take, all, call, takeLatest, cancel, cancelled, delay } from 'redux-saga/effects'
import { NEW_STOCK_ENDPOINT_URL, NEWS_ENDPOINT_URL, PRICE_ENDPOINT_URL, COLD_CHART_ENDPOINT_URL } from '../config/config.js'
import { useDebugValue } from 'react'

const getNewStockData = (url, controller) => fetch(url, { signal: controller.signal })
    .then(response => {
        if(response.status===404){
            alert('Stock symbol does not exist!')
        }
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    .catch(error => console.log(error.name, error.message))

function* searchSubmittedWatcher() {
    yield takeLatest('SEARCH_SUBMITTED', searchSubmittedHandler);
}

function* stockReceivedWatcher() {
    while (true) {
        const action = yield take('STOCK_RECEIVED');
        const pricePolling = yield fork(pollPrice, action);
        const newsPolling = yield fork(pollNews, action)
        yield take('ABORT_CURRENT_REQUESTS');
        yield cancel(pricePolling);
        yield cancel(newsPolling);
    }
}

function* pollPrice(action) {
    const controller = new AbortController();
    const requestParameters = `{"symbol":"${action.payload.info.symbol}", "range":"1d"}`;
    try {
        while (true) {
            yield delay(3000)
            const news = yield call(getNewStockData, PRICE_ENDPOINT_URL + requestParameters, controller)
            yield put({ type: 'PRICE_RECEIVED', payload: news })
        }
    }
    finally {
        if (yield cancelled()) {
            controller.abort();
        }
    }
}

function* pollNews(action) {
    const controller = new AbortController();
    const requestParameters = `{"symbol":"${action.payload.info.symbol}", "range":"1d"}`;
    try {
        while (true) {
            yield delay(3000)
            const news = yield call(getNewStockData, NEWS_ENDPOINT_URL + requestParameters, controller)
            //console.log('news before sent'+ news[0].headline)
            yield put({ type: 'NEWS_RECEIVED', payload: news })
        }
    }
    finally {
        if (yield cancelled()) {
            controller.abort();
        }
    }
}

function* searchSubmittedHandler(action) {
    // Previous and new stock symbols
    const currentSymbol = yield select(state => state.symbol)
    const symbol = action.payload;
    // If search for the same stock as current one, do nothing
    if (currentSymbol === symbol) {
        return;
    }
    // Fetch the new stock data
    const requestParameters = `{"symbol":"${symbol}", "range":"1d"}`;
    const controller = new AbortController();
    //const controller1 = new AbortController();
    const stockData = yield call(getNewStockData, NEW_STOCK_ENDPOINT_URL + requestParameters, controller);
    const chartData = yield call(getNewStockData, COLD_CHART_ENDPOINT_URL + requestParameters, controller);
    /*const [chartData, stockData] = yield all([
        call(getNewStockData, COLD_CHART_ENDPOINT_URL + requestParameters, controller),
        call(getNewStockData, NEW_STOCK_ENDPOINT_URL + requestParameters, controller)
      ])*/
    if (stockData === undefined ) {
        return;
    }
    //console.log('chart before send'+JSON.stringify(chartData))
    yield put({ type: 'ABORT_CURRENT_REQUESTS' })
    yield put({ type: 'STOCK_RECEIVED', payload: {info:stockData, chart:chartData}}) // this orchestrates the ongoing polls
}

export default function* rootSaga() {
    yield fork(searchSubmittedWatcher)
    yield fork(stockReceivedWatcher)
}