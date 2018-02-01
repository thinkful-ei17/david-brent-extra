import {
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_ERROR
} from './actions';

const initialState = {
    characters: [],
    loading: false,
    error: null
};

export function characterReducer(state=initialState, action) {
    // Handle these sync actions
    if (action.type === SEARCH_CHARACTERS_REQUEST) {
        // change loading to true
        return {...state, loading: true, error: null}
    }
    else if (action.type === SEARCH_CHARACTERS_SUCCESS) {
        // update characters array and loading goes back to false
        return {...state, characters: action.characters, loading: false}
    }
    else if (action.type === SEARCH_CHARACTERS_ERROR) {
        // set loading back to false and error to action.error
        return {...state, error: action.error, loading: false}

    }
    return state;
}
