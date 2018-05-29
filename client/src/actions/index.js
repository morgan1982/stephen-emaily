import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () =>  async dispatch => { // automatically called by redux-thunk
        const res = await axios.get('/api/current_user');
        dispatch ({ type: FETCH_USER, payload: res.data });
}

// for the payment
export const handleToken = token => async dispatch => {
        const res = await axios.post('/api/stripe', token);
        dispatch ({ type: FETCH_USER, payload: res.data })
}
// both actions send the user model to the reducers thats why the FETCH_USER action.type is used again.

