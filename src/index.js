import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import Login from './login';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'

const app = (
    <Provider store={store}>
        <Login />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
