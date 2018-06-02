import React from 'react';
import { connect } from 'react-redux';

const SurveyFormRewiew = ({ onCancel }) => {


    return (
        <div>
            <h5>Please confirm your Entries</h5>
            <button className="btn yellow darken-3 btn-flat"
                    onClick={onCancel}>Cancel</button>
        </div>
        );
};
function mapStateToProps(state) {

    return {};
}


export default connect(mapStateToProps)(SurveyFormRewiew);
