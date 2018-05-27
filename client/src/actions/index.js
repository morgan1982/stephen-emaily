import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () =>  async dispatch => { // automatically called by redux-thunk
        const res = await axios.get('/api/current_user');
        dispatch ({ type: FETCH_USER, payload: res.data });
}
