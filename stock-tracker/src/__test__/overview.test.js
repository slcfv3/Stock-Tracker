import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import sampleData from './sampleData'
import Overview from '../components/overview';
import { render, screen, cleanup } from '@testing-library/react'

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
            <Overview />
        </Provider>
    );
};






describe('Overview Component', () => {
    
    it('should render empty for initial state',()=>{
        component(initialStore)
        const ininame = screen.getByTestId('company-name')
        const iniwebsite = screen.getByTestId('website')
        const inidescription = screen.getByTestId('description')
        expect(ininame.innerHTML).toBe("");
        expect(iniwebsite.innerHTML).toBe("");
        expect(inidescription.innerHTML).toBe("");
    })
    
    it('should render correct value for company name', () => {
        component(store)
        const name = screen.getByTestId('company-name')
      expect(name.innerHTML).toBe("Twitter, Inc.(TWTR)");
    });

    it('should render correct value for website', () => {
        component(store)
        const website = screen.getByTestId('website')
        expect(website.innerHTML).toBe("t./wtpw/owte:mthcrit.w");
    });

    it('should render correct value for description', () => {
        component(store)
        const description = screen.getByTestId('description')
        expect(description.innerHTML).toBe("osiv CIWn esvbtodimteii  tgsciooyo ivt aeillavise   aTeenrswy2el.n st ccerdsoc  eihd puvpToitud TgnrorPappl cadnsie wrro oxmeoresscs til nrtn.tnbtca 6lTvnaarelo oso  P aruo Tv-sa d nesIstesof mm anhcpelyrr nitgnvnst1 urenrhodtsvnnrnoed.dn, af ckmin cnewiishcncn,sicsdrsiy.us.Ii e.e imasrthecr siiavaiedot-catlt c eoTe nekevw ua,c,roeo o,ttn ea ,icdPpcsEls PASnkaiisaossn'ripi seooeos sncds oqmnInwsDaanrg fr2   eeTrt ’ e iIea et onsnmse hi bamlr mpooo  drhmof ic,rnnaeeosereE.trcne.sacttev dec n  estanJts ea,a drd0h,loo b tr s oaeapcis e,d pses ianlarlFlruCmedtcosde oof  mt paeG  nM atd ugh.euti p pnhpLs nv0iSo anamics nb  Nrataseaneyobsrdro h on en elToseeiewiuiue e  iie,d,fowl ltoi cr  AtnrolcicaialeawcJosorndI,t, mpgterrkybaa  n ,tdegl");
    });

   
  });