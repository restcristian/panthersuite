import { GET_CONCERTS_EVENTS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CONCERTS_EVENTS: 
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    };
};