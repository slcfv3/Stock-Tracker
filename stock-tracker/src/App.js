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
import { FooterSectionTitle } from './styled-components/text'
import { rootReducer } from './reducers/rootReducer.js'
import rootSaga from './sagas/rootSaga.js'
import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './theme.js'
import { Grid, Row, Col } from './styled-components/wrappers.js'
import { BlueLine, GreyLine } from './styled-components/lines.js'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Grid>

          <Row justifyContent='space-between' marginBottom='2%'>
            <Col>
              LOGO
            </Col>
            <Col>
              <HeaderTabs />
            </Col>
          </Row>

          <Row justifyContent='space-between'>
            <Col size={4}>
              <SearchBar />
            </Col>
            <Col size={1}>
              <Price size={40}/>
            </Col>
          </Row>

          <Row>
            <GreyLine />
          </Row>

          <Row justifyContent='space-between' marginBottom='1%'>
            <Col >
              <StockTags />
            </Col>
            <Col >
              <MarketOpen />
            </Col>
          </Row>

          <Row>
            <Col size={2}>
              <Chart />
            </Col>
            <Col size={1}>
              <News />
            </Col>
          </Row>

          <Row marginBottom='2%'>
            <Col size={2}>
              <Keystats />
            </Col>
            <Col size={1}>
              <Overview />
              <Peers />
            </Col>
          </Row>
        
        </Grid>
      </ThemeProvider>
    </ Provider >
  );
}

export default App;
