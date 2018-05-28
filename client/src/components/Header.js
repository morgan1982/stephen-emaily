import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const logger = null;

class Header extends Component {


    renderContent() {
        console.log("inside header", this.props.auth);
        switch (this.props.auth) {
            case null:
                return "waiting..";
            case false:
                return 'i am logged out'
            default:
                return 'im logged in'
        }
    }

    render() {

        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-log">Emaily</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>

        )
    }


}

function mapStateToProps({ auth }) {
    return { auth };
}



export default connect(mapStateToProps)(Header);