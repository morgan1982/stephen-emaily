import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {


    render () {


        return (
            <StripeCheckout
                amount={500}
                name="Emaily"
                description="5$ for 5 email gredits"
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                 <button className="btn">
                     <span className="text1">Add gredits</span>
                 </button>
             </StripeCheckout>
            );
    }
}


export default connect(null, actions)(Payments);
