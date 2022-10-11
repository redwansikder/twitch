import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducer from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancer(applyMiddleware(reduxThunk)))
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
