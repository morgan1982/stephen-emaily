import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';

import * as actions from '../../actions';

const SurveyFormRewiew = ({ onCancel, formValues, submitSurvey }) => {


    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
            )
    })


    return (
        <div>
            <h5>Please confirm your Entries</h5>
                {reviewFields}
            <button className="btn yellow darken-3 white-text btn-flat"
                    onClick={onCancel}>Cancel</button>
            <button className="green btn-flat right white-text"
                    onClick={() => submitSurvey(formValues)}>
                Send Survey
                <i className="material-icons rigth">email</i>
            </button>
        </div>
        );
};
function mapStateToProps(state) {

    return { formValues: state.form.surveyForm.values };
}


export default connect(mapStateToProps, actions)(SurveyFormRewiew);
