import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const logger = null;

class Header extends Component {


    renderContent() {
        switch (this.props.auth) {
            case null:
                return "waiting..";
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                    )
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                    )
        }
    }

    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-log"
                        >Emaily</Link>
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