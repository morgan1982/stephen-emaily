import axios from 'axios';
import { FETCH_USER } from './types';


const fetchUser = () => {
    return function(dispatch) { // automatically called by redux-thunk
        axios.get('/api/current_user');
    }
};