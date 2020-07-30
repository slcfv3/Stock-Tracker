import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import SearchBar from './components/SearchBar.js'
import Chart from './components/chart.js'
import Keystats from './components/keyStats.js'
import Price from './components/price.js'
import News from './components/news'
import Overview from './components/overview'
import Peers from './components/peers'
import StockTags from './components/StockTags'
import MarketOpen from './components/MarketOpen'
import HeaderTabs from './components/HeaderTabs'
import { FooterSectionTitle, FooterStockSymbol } from './styled-components/text'
import { rootReducer } from './reducers/rootReducer.js'
import { rootSaga } from './sagas/rootSaga.js'
import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './theme.js'
import { Grid, Row, Col } from './styled-components/wrappers.js'
import { BlueLine } from './styled-components/lines.js'
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2'
import logo from './assets/images/adaptive.png'
import { ResponsiveContainer } from "recharts";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Grid>

          <Row justifyContent='space-between' marginBottom='3%'>
            <Col>
              <img src={logo} height='50px' />
            </Col>
            <Col hideWidth='950px'>
              <HeaderTabs />
            </Col>
          </Row>

          <Row justifyContent='space-between' columnGap='5px'>
            <Col>
              <SearchAlt2 size={50} color='#7fb3ff' />
            </Col>
            <Col size={1}>
              <SearchBar />
            </Col>
            <Col size={1}>
              <Price size={40} />
            </Col>
          </Row>

          <Row>
            <BlueLine />
          </Row>

          <Row justifyContent='space-between' marginBottom='1%'>
            <Col >
              <StockTags />
            </Col>
            <Col >
              <MarketOpen />
            </Col>
          </Row>

          <Row maxWidth='1530px'>
            <Col size={2}>
                <Chart />
            </Col>
            <Col size={1}>
              <News />
            </Col>
          </Row>

          <Row marginBottom='2%' maxWidth='1530px'>
            <Col size={2}>
              <Keystats />
            </Col>
            <Col size={1}>
              <Overview />
              <Peers />
            </Col>
          </Row>

          <Row BackgroundImage='linear-gradient(to bottom, #00265d, #00204f);' Padding='20px 30px 20px 30px' hideWidth='950px'>

            <Col size={1} BorderRight='solid 1px #ffffff;'>

              <Row marginBottom='1%'>
                <FooterSectionTitle> MARKETS </FooterSectionTitle>
              </Row>

              <Row>

                <Col>
                  <Row columnGap='15px'>
                    <FooterStockSymbol>NASDAQ</FooterStockSymbol> <Price size={15} />
                  </Row>
                </Col>
                <Col>
                  <Row columnGap='15px'>
                    <FooterStockSymbol>DJIA</FooterStockSymbol> <Price size={15} />
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col size={1}>

              <Row marginBottom='1%'>
                <FooterSectionTitle> FAVORITES </FooterSectionTitle>
              </Row>

              <Row >
                <Col>
                  <Row columnGap='15px'>
                    <FooterStockSymbol>AMZN</FooterStockSymbol> <Price size={15} />
                  </Row>
                </Col>
                <Col>
                  <Row columnGap='15px'>
                    <FooterStockSymbol>MSFT</FooterStockSymbol> <Price size={15} />
                  </Row>
                </Col>
              </Row>

            </Col>
          </Row>

        </Grid>
      </ThemeProvider>
    </ Provider >
  );
}

export default App;
