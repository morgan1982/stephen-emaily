import { FETCH_USER } from '../actions/types';


export default function(state = null, action) {


    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; // if payload is "" it has the value of false
        default:
            return state;
    }
}

/*
The logical OR operator isn't commutative like +, *, etc. It returns the first expression which can be converted into true
*/