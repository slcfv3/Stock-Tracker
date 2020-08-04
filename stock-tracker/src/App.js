import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import SearchBar from './components/SearchBar.js'
import DropDown from './components/dropdown'
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
import { SearchIcon } from './styled-components/icons.js'
import { BlueLine } from './styled-components/lines.js'
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2'
import logo from './assets/images/adaptive.png'

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
            <Col hideWidth='900px'>
              <HeaderTabs />
            </Col>
          </Row>

          <Row justifyContent='space-between' columnGap='5px'>
            <Col>
              <SearchIcon iconSize={50} breakpoint='1200px'  smallBreakpoint='900px'/>
            </Col>
            <Col size={1}>
              <SearchBar />
            </Col>
            <Col size={1} hideWidth='650px'>
              <Price fontSize='40' breakpoint='1200px' smallBreakpoint='900px'/>
            </Col>
          </Row>
          <Row>
            <BlueLine />
          </Row>


          <Row  justifyContent='flex-end' minWidth='650px' marginBottom='3%'>
            <Price fontSize='20'/>
          </Row>

          <DropDown />
    
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
            <Col size={2} Padding='0 0 2% 0'>
              <Keystats />
            </Col>
            <Col size={1}>
              <Overview />
              <Peers breakpoint='450px'/>
            </Col>
          </Row>

          

        </Grid>
        <Row BackgroundImage='linear-gradient(to bottom, #00265d, #00204f);' >

            <Col size={1} BorderRight='solid 1px rgba(255, 255, 255, 0.1)' Padding='20px 30px 20px 30px' hideWidth='700px'>

              <Row marginBottom='1%'>
                <FooterSectionTitle> MARKETS </FooterSectionTitle>
              </Row>

              <Row>

                <Col>
                  <Row columnGap='15px'>
                    <FooterStockSymbol>NASDAQ</FooterStockSymbol> <Price fontSize='15' />
                  </Row>
                </Col>
                <Col>
                  <Row columnGap='15px'>
                    <FooterStockSymbol>DJIA</FooterStockSymbol> <Price fontSize='15' />
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col size={1} Padding='20px 30px 20px 30px' hideWidth='1400px'>

              <Row marginBottom='1%'>
                <FooterSectionTitle> FAVORITES </FooterSectionTitle>
              </Row>

              <Row >
                <Col>
                  <Row >
                    <FooterStockSymbol>AMZN</FooterStockSymbol> <Price fontSize='15' />
                  </Row>
                </Col>
                <Col>
                  <Row >
                    <FooterStockSymbol>MSFT</FooterStockSymbol> <Price fontSize='15' />
                  </Row>
                </Col>
              </Row>

            </Col>
          </Row>
      </ThemeProvider>
    </ Provider >
  );
}

export default App;
