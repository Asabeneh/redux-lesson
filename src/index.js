import React from 'react'
import ReactDOM from 'react-dom'

// importing the createStore method from redux
import { createStore } from 'redux'
// import the provider from react-redux

import { Provider } from 'react-redux'
import reducer from './store/reducer'

import './index.css'
import App from './App'

// To get started redux we need the following packages
// redux
// react-redux

// creating store
const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
