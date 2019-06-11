import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'
import { loadState } from '../persist/localStorage'

const persistedState = loadState()

const middlewares = []

const sagaMonitor = 
  process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const store = createStore(reducers, persistedState, compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(sagas)

export default store