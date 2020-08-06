import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import sampleData from './sampleData'
import Keystats from '../components/keyStats';
import { render, screen, cleanup } from '@testing-library/react'
import { findHighValue, findLowValue } from '../util'

const mockStore = configureStore([]);

let store;

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
    previousClose: sampleData.previousClose,
    iexVolume: sampleData.iexVolume,
    marketCap: sampleData.marketCap,
    peRatio: sampleData.peRatio,
    week52Low: sampleData.week52Low,
    week52High: sampleData.week52High,
    avgTotalVolume: sampleData.avgTotalVolume,
    dividendYield: sampleData.stats.dividendYield,
    ttmEPS: sampleData.stats.ttmEPS,
    low: sampleData.low,
    high: sampleData.high,
    open: sampleData.open
}

const initialStore = mockStore(initialState)
const newState = {
    symbol: sampleData.symbol,
    companyName: sampleData.companyName,
    overview: sampleData.overview,
    price: sampleData.latestPrice,
    priceChange: sampleData.change,
    priceChangePercent: sampleData.changePercent,
    chart: sampleData.chart,
    coldChart: sampleData.coldcharts,
    news: sampleData.news,
    keyStats: keyStats,
    peer: sampleData.peers
}

store = mockStore(newState);

const component = (store) => {
    return render(
        <Provider store={store}>
            <Keystats />
        </Provider>
    );
};



describe('Keystats Component', () => {
    it('should render empty for initial state', () => {
        component(initialStore)
        const previousClose = screen.getByTestId('previous-close')
        const dayRange = screen.getByTestId('day-range')
        const volume = screen.getByTestId('volume')
        const marketCap = screen.getByTestId('market-cap')
        const peratio = screen.getByTestId('peratio')

        const openValue = screen.getByTestId('openValue')
        const range = screen.getByTestId('52range')
        const avgVolume = screen.getByTestId('avg-volume')
        const earnings = screen.getByTestId('earnings')
        const dividend = screen.getByTestId('dividend')
        expect(previousClose.innerHTML).toBe("  ");
        expect(dayRange.innerHTML).toBe("  ");
        expect(volume.innerHTML).toBe("  ");
        expect(marketCap.innerHTML).toBe("  ");
        expect(peratio.innerHTML).toBe("  ");

        expect(openValue.innerHTML).toEqual('  ');
        expect(range.innerHTML).toBe("  ");
        expect(avgVolume.innerHTML).toBe("  ");
        expect(earnings.innerHTML).toBe("  ");
        expect(dividend.innerHTML).toBe("  ");
      });
    
    it('should render correct value for previous close', () => {
        component(store)
        const previousClose = screen.getByText('Previous Close').closest('tr').children[1]
      expect(previousClose.innerHTML).toBe(' '+newState.keyStats.previousClose+' ');
    });

    it('should render correct value for day range', () => {
        component(store)
        const dayRange = screen.getByText('Day Range').closest('tr').children[1]
        expect(dayRange.innerHTML).toBe(' '+findLowValue(newState.chart) + '-' + findHighValue(newState.chart)+ ' ');
    });

    it('should render correct value for volume', () => {
        component(store)
        const volume = screen.getByText('Volume').closest('tr').children[1]
    expect(volume.innerHTML).toBe(' '+newState.keyStats.iexVolume+' ');
    });

    it('should render correct value for market cap', () => {
        component(store)
        const marketCap = screen.getByText('Market Cap').closest('tr').children[1]
    expect(marketCap.innerHTML).toBe(' '+newState.keyStats.marketCap+' ');
    });

    it('should render correct value for P/E ratio', () => {
        component(store)
        const peratio = screen.getByText('P/E Ratio').closest('tr').children[1]
    expect(peratio.innerHTML).toBe(' '+newState.keyStats.peRatio+' ');
    });

    it('should render correct value for open', () => {
        component(store)
        const openValue = screen.getByText('Open').closest('tr').children[1]
    expect(openValue.innerHTML).toBe(' '+newState.chart[1]?.open+' ');
    });

    it('should render correct value for 52 weeks range', () => {
        component(store)
        const range = screen.getByText('52 Week Range').closest('tr').children[1]
    expect(range.innerHTML).toBe(' '+ newState.keyStats.week52Low + '-' + newState.keyStats.week52High+ ' ');
    });

    it('should render correct value for total average volume', () => {
        component(store)
        const avgVolume = screen.getByText('Total Avg Volume').closest('tr').children[1]
    expect(avgVolume.innerHTML).toBe(' '+newState.keyStats.avgTotalVolume+' ');
    });

    it('should render correct value for earnings per share', () => {
        component(store)
        const earnings = screen.getByText('Earnings Per Share').closest('tr').children[1]
    expect(earnings.innerHTML).toBe(' '+newState.keyStats.ttmEPS+' ');
    });

    it('should render correct value for dividend & yield', () => {
        component(store)
        const dividend = screen.getByText('Dividend & Yield').closest('tr').children[1]
    expect(dividend.innerHTML).toBe(' '+newState.keyStats.dividendYield===undefined?newState.keyStats.dividendYield:' '+' ');
    });
   
  });