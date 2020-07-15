import { select, put, fork, take, call, takeEvery, takeLatest, cancel, cancelled, race } from 'redux-saga/effects'
import { NEW_STOCK_ENDPOINT_URL } from '../config/config.js'

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
    const newStockData = yield call(getNewStockData, NEW_STOCK_ENDPOINT_URL + requestParameters)
    console.log("newStockData:", newStockData)
    yield put({ type: 'STOCK_RECEIVED', payload: newStockData})
}

export default function* rootSaga() {
    yield fork(searchSubmittedWatcher)
    //yield fork(searchSubmittedHandler)
}