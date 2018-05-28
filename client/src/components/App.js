import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {


    componentDidMount() {
        // console.log(this.props)
        this.props.fetchUser();
    }


    render () {
        console.log("stripe key", process.env.REACT_APP_STRIPE_KEY);

        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );

    }

};

export default connect(null, actions)(App);
