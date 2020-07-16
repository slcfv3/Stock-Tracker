import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import SearchBar from './components/SearchBar.js'
import Chart from './components/Chart.js'
import Keystats from './components/keyStats.js'
import Price from './components/price.js'
import { rootReducer } from './reducers/rootReducer.js'
import rootSaga from './sagas/rootSaga.js'
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <Chart />

          <Price />
        </header>
        <Keystats/>
      </div>
    </Provider>
  );
}

export default App;
