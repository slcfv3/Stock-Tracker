import React from 'react'
import Chart from '../chart'
import stock from './mocks/newStockMock'
import { render, fireEvent, cleanup, waitForElement, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

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
    peer: []
}
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

const newState = {
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
    peer: stock.peers
}

const mockStore = configureMockStore();
const initialStore = mockStore(initialState);
const newStockStore = mockStore(newState)

const renderWithStore = (store) => {
    return render(
        <Provider store={store}>
            <Chart />
        </Provider>
    );
};

describe('chart buttons', () => {
    afterEach(cleanup);

    it('has all the range buttons', () => {
        const { getByText } = renderWithStore(initialStore)
        getByText('1D')
        getByText('5D')
        getByText('1M')
        getByText('1Y')
        getByText('5Y')
        getByText('MAX')
        expect(getByText('1D')).toHaveStyle('color: white')
        expect(getByText('5D')).toHaveStyle('color: #beccdc')
        expect(getByText('1M')).toHaveStyle('color: #beccdc')
        expect(getByText('1Y')).toHaveStyle('color: #beccdc')
        expect(getByText('5Y')).toHaveStyle('color: #beccdc')
        expect(getByText('MAX')).toHaveStyle('color: #beccdc')
    })

    it('disables the buttons when there is no data (i.e. at startup)', () => {
        const { getByText } = renderWithStore(initialStore)
        expect(getByText('5D')).toBeDisabled();
        expect(getByText('1M')).toBeDisabled();
        expect(getByText('1Y')).toBeDisabled();
        expect(getByText('5Y')).toBeDisabled();
        expect(getByText('MAX')).toBeDisabled();
    })

    it('enables all the buttons when there is data', () => {
        const { getByText } = renderWithStore(newStockStore)
        expect(getByText('1D')).not.toBeDisabled();
        expect(getByText('5D')).not.toBeDisabled();
        expect(getByText('1M')).not.toBeDisabled();
        expect(getByText('1Y')).not.toBeDisabled();
        expect(getByText('5Y')).not.toBeDisabled();
        expect(getByText('MAX')).not.toBeDisabled();
    })

    it('changes the button styling appropriately as the user clicks around', () => {
        const { getByText } = renderWithStore(newStockStore)

        expect(getByText('1D')).toHaveStyle('color: white')
        fireEvent.click(getByText('5D'))
        expect(getByText('1D')).toHaveStyle('color: #beccdc')

        fireEvent.click(getByText('1M'))
        expect(getByText('1M')).toHaveStyle('color: white')
        expect(getByText('1D')).toHaveStyle('color: #beccdc')
        expect(getByText('MAX')).toHaveStyle('color: #beccdc')

        // Clicking twice shouldn't switch styles and then back again..
        fireEvent.click(getByText('5Y'))
        fireEvent.click(getByText('5Y'))
        expect(getByText('5Y')).toHaveStyle('color: white')

        // Alternating..
        fireEvent.click(getByText('5D'))
        fireEvent.click(getByText('1D'))
        fireEvent.click(getByText('5D'))
        expect(getByText('5D')).toHaveStyle('color: white')
        expect(getByText('1D')).toHaveStyle('color: #beccdc')
    })


})