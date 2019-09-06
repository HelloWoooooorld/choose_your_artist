import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// react tools 

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise';
// redux
import Routes from './routes'
import reducers from './component/reducers';
// components

const createStorewithMiddleware = applyMiddleware(promiseMiddleWare)(createStore)


ReactDOM.render(
    <Provider store={createStorewithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

