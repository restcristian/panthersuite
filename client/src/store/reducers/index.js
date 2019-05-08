import { combineReducers } from 'redux';
import navBarReducer from './navBarReducer';
import eventsReducer from './EventsReducer';
import spotlightReducer from './SpotlightReducer';
// Concert Page reducers
import concertEventsReducer from './ConcertEventsReducer';

export default combineReducers({
    navBar: navBarReducer,
    events: eventsReducer,
    spotlight:spotlightReducer,
    concertEvents:concertEventsReducer
});