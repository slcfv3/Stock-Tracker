import { select, put, fork, take, call, takeEvery, takeLatest, cancel, cancelled, race, all, delay } from 'redux-saga/effects'
import { NEW_STOCK_ENDPOINT_URL, NEWS_ENDPOINT_URL, PRICE_ENDPOINT_URL } from '../config/config.js'

const getNewStockData = (url, controller) => fetch(url, { signal: controller.signal })
    .then(response => response.json())
    .catch(error => console.log('Fetch error ', error.name, error.message))

function* searchSubmittedWatcher() {
    yield takeLatest('SEARCH_SUBMITTED', searchSubmittedHandler);
}

function* stockReceivedWatcher() {
    while(true) {
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
    const requestParameters = `{"symbol":"${action.payload.symbol}", "range":"1d"}`;
    try {
        while(true) {
            yield delay(3000)
            const news = yield call(getNewStockData, PRICE_ENDPOINT_URL + requestParameters, controller)
            yield put({ type: 'PRICE_RECEIVED', payload: news })
        }
    }
    finally {
        if (yield cancelled()) {
            console.log("in cancel block");
            controller.abort();
        }
    }
}

function* pollNews(action) {
    const controller = new AbortController();
    const requestParameters = `{"symbol":"${action.payload.symbol}", "range":"1d"}`;
    try {
        while(true) {
            yield delay(3000)
            const news = yield call(getNewStockData, NEWS_ENDPOINT_URL + requestParameters, controller)
            yield put({ type: 'NEWS_RECEIVED', payload: news })
        }
    }
    finally {
        if (yield cancelled()) {
            console.log("in cancel block");
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
    // Otherwise, cancel current polling requests
    console.log("Cancelling")
    yield put({ type: 'ABORT_CURRENT_REQUESTS'})
    // Fetch the new stock data
    const requestParameters = `{"symbol":"${symbol}", "range":"1d"}`;
    const controller = new AbortController();
    const stockData = yield call(getNewStockData, NEW_STOCK_ENDPOINT_URL + requestParameters, controller)
    yield put({ type: 'STOCK_RECEIVED', payload: stockData }) // this orchestrates the ongoing polls
}

export default function* rootSaga() {
    yield fork(searchSubmittedWatcher)
    yield fork(stockReceivedWatcher)
}