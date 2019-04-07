import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css'

import Filmotechy from './app/components/filmotechy';
import * as serviceWorker from './serviceWorker';
import store from './app/store/store'

ReactDOM.render(
    <Provider store = {store} >
        <Filmotechy/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
