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
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux'
import StockTracker from './StockTracker'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
        <StockTracker />
    </ Provider >
  );
}

export default App;
