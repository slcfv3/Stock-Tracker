import { select, put, fork, take, call, takeEvery, takeLatest, cancel, cancelled, race, all } from 'redux-saga/effects'
import { NEW_STOCK_ENDPOINT_URL, NEWS_ENDPOINT_URL } from '../config/config.js'

const getNewStockData = (url) => fetch(url)
    .then(response => response.json())
    .catch(error => console.log('Fetch error ', error.name, error.message))

function* searchSubmittedWatcher() {
    yield takeLatest('SEARCH_SUBMITTED', searchSubmittedHandler);
}

function* searchSubmittedHandler(action) {
    const requestParameters = `{"symbol":"${action.payload}", "range":"1d"}`;
    console.log("requestParameters:", requestParameters);
    console.log("URL + PARAMETERS:", NEW_STOCK_ENDPOINT_URL + requestParameters)
    const { stockData, newsData } = yield all({
        stockData: call(getNewStockData, NEW_STOCK_ENDPOINT_URL + requestParameters),
        newsData: call(getNewStockData, NEWS_ENDPOINT_URL + requestParameters)
        })
    yield put({ type: 'STOCK_RECEIVED', payload: stockData})
    yield put({ type: 'NEWS_RECEIVED', payload: newsData})
}

export default function* rootSaga() {
    yield fork(searchSubmittedWatcher)
    //yield fork(searchSubmittedHandler)
}