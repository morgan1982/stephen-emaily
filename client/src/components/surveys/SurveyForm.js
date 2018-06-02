import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'title'},
    { label: 'Subject Line', name: 'subject'},
    { label: 'Email Body', name: 'body'},
    { label: 'Recipient List', name: 'emails'},
]


class SurveyForm extends Component {

    renderFields() {

        return _.map(FIELDS, ({ label, name, key }) => { // destructure the field (eatch object in the array)
            return <Field component={SurveyField}
                          type="text"
                          label={label}
                          name={name}
                          key={name}/>
        })

    }


    render() {


        return (

            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                        {this.renderFields()}
                    <Link to="/surveys" className="red btn">
                        Cancel
                    </Link>
                    <button type="submit" className="btn right">Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
            )
    }
}



export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
