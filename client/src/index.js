import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';

import Styles from './styles.css';

console.log(process);
window.axios = axios;


const store = createStore(
                        reducers,
                        {},
                        compose(
                            applyMiddleware(reduxThunk),
                            window.devToolsExtension ? window.devToolsExtension() : f => f
                            )
                    );

ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
             document.querySelector('#root'));
