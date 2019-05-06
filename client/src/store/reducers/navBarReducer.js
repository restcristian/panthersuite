import { TOGGLE_SEARCH } from '../actions/types';

const INITIAL_STATE = {
    isSearchOpen: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return {
                ...state,
                isSearchOpen: !state.isSearchOpen
            };
        default:
            return state;
    }
};