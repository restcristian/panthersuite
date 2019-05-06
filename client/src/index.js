import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './global.css';
import { Provider } from 'react-redux';
import store from './store/createStore';
import { Router } from 'react-router-dom';
import History from './history/history';

const wrapper = (
    <Provider store={store}>
        <Router history={History} >
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(wrapper, document.getElementById('root'));
