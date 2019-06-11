import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './config/reactotron'
import Routes from './routes'
import { saveState } from './persist/localStorage'

import store from './store'


store.subscribe(()=> { 
  saveState(store.getState()) 
}, 1000)

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
