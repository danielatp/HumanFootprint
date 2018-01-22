import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Home from './components/Home.jsx'
import Routes from './routes'
import {Route, Switch, Router} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
)
