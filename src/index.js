import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './container/App/App.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import Store from './store/store'

ReactDOM.render(
<Provider store={Store}> 
<App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
