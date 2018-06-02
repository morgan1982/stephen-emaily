import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title', noValueError: 'Provide a title'},
    { label: 'Subject Line', name: 'subject', noValueError: 'Provide a subject'},
    { label: 'Email Body', name: 'body', noValueError: 'Provide a body'},
    { label: 'Recipient List', name: 'emails', noValueError: 'Provide emails'},
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
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

function validate(values) {
    const errors = {}; // if the object is empty form is valid

    errors.emails = validateEmails(values.emails || '');


    _.each(FIELDS, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError
        }
    })


    return errors;
}



export default reduxForm({
    destroyOnUnmount: false,
    validate: validate,
    form: 'surveyForm' // to provide the namespace inside the formReducer
})(SurveyForm);
