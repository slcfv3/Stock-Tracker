import React from 'react';
import logo from './logo.svg';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import SearchBar from './components/SearchBar.js'
import Chart from './components/Chart.js'
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
        </header>
      </div>
    </Provider>
  );
}

export default App;
