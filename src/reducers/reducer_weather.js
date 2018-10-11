import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        // return state.concat([action.payload.data]); // does not mutate state, but returns new instance of state with old state
        return [action.payload.data, ...state]; //es6 adds to top of the array
        default: 
            return state;
    }
    
}
