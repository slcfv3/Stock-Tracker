import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import sampleData from './sampleData'
import News from '../components/news';
import { render, screen, cleanup } from '@testing-library/react'
import { unixToTimePassed } from '../util'

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

store = mockStore(
{
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
);

const component = (store) => {
    return render(
        <Provider store={store}>
            <News />
        </Provider>
    );
};



describe('News Component', () => {
    
    it('should render empty for initial state', () => {
        component(initialStore)
        const newsList = screen.getByTestId('newslist')
        expect(newsList.innerHTML).toBe("");
        
      });
    
    it('should render correct headline for first news', () => {
        component(store)
        const firstHead = screen.getByTestId('headline0')

      expect(firstHead.innerHTML).toBe("ksco ac,n IB'sMyirTaeee Farn SEk UetFsg WrCrt Or rQrinno  itulw 2TofO:h 't");
    });

    it('should render correct headline for second news', () => {
        component(store)
        const secondHead = screen.getByTestId('headline1')
        expect(secondHead.innerHTML).toBe("itaasn   oe sprus reeiedelTah,tmcwcmagrrtdtrteecw iun");
    });

    it('should render correct headline for third news', () => {
        component(store)
        const thirdHead = screen.getByTestId('headline2')
    expect(thirdHead.innerHTML).toBe("rvif S   so ry tcnisnaiMiewmMekraori rJoma WtCTak:EheodRtegct");
    });

    it('should render correct headline for fourth news', () => {
        component(store)
        const fourthHead = screen.getByTestId('headline3')
    expect(fourthHead.innerHTML).toBe("tsuUh et arFnynlkOaSr  T edtiiBhsiAlewti rergenp o ae");
    });

    it('should render correct headline for fifth news', () => {
        component(store)
        const fifthHead = screen.getByTestId('headline4')
    expect(fifthHead.innerHTML).toBe(" nvabodhc9nsasaegndsaeiolrsisset  os-i0 west1ecn2,s ioniree Tlu feutrmsl tun  ckemepk a tww itits k vo %  re");
    });

    it('should render correct tag for first news', () => {
        component(store)
        const firstTag = screen.getByTestId('tag0')
        expect(firstTag.innerHTML).toBe(unixToTimePassed(1618634389056)+' -  ndgFeiseaeBnz');
    });

    it('should render correct tag for second news', () => {
        component(store)
        const secondTag = screen.getByTestId('tag1')
        expect(secondTag.innerHTML).toBe(unixToTimePassed(1649017234171)+' - nroiPtduU');
    });

    it('should render correct tag for third news', () => {
        component(store)
        const thirdTag = screen.getByTestId('tag2')
    expect(thirdTag.innerHTML).toBe(unixToTimePassed(1622898983429)+' - rteeS hteT');
    });

    it('should render correct tag for fourth news', () => {
        component(store)
        const fourthTag = screen.getByTestId('tag3')
    expect(fourthTag.innerHTML).toBe(unixToTimePassed(1662500828978)+' - tRToSM reaeethey enl');
    });

    it('should render correct tag for fifth news', () => {
        component(store)
        const fifthTag = screen.getByTestId('tag4')
    expect(fifthTag.innerHTML).toBe(unixToTimePassed(1604969673421)+' - aRsuas oTidy');
    });
    

   
  });