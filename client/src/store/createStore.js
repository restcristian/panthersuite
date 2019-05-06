import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'

const middlewares = [ReduxThunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
export default createStore(reducers, 
    composeEnhancer(applyMiddleware(...middlewares)));