import { combineReducers } from 'redux';
import navBarReducer from './navBarReducer';
import eventsReducer from './EventsReducer';
import spotlightReducer from './SpotlightReducer';

export default combineReducers({
    navBar: navBarReducer,
    events: eventsReducer,
    spotlight:spotlightReducer
});