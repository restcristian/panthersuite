import { GET_SPOTLIGHT } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SPOTLIGHT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};