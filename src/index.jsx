import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promisse from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import Rautes from './main/routes'
import reducers from '../src/main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promisse, multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Rautes />
    </Provider>, 
document.getElementById('app'))