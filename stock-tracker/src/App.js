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
import { rootReducer } from './reducers/rootReducer.js'
import rootSaga from './sagas/rootSaga.js'
import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './theme.js'
import { Grid, Row, Col } from './styled-components/wrappers.js'
import { BlueLine } from './styled-components/lines.js'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Grid>

          <Row>
            <Col size={2}>
              <SearchBar />
            </Col>
            <Col size={1}>
              <Price />
            </Col>
          </Row>
          
          <BlueLine />

          <Row>
            <Col size={2}>
              <Chart />
            </Col>
            <Col size={1}>
              <News />
            </Col>
          </Row>

          <Row>
            <Col size={2}>
              <Keystats />
            </Col>
            <Col size={1}>
              <Overview />
            </Col>
          </Row>

        </Grid>

      </ThemeProvider>
    </ Provider >
  );
}

export default App;
