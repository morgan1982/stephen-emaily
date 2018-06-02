import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    state = { showFormRewiew: false };


    renderContent() {
        if (this.state.showFormRewiew) {
            return <SurveyFormReview
                    onCancel={() => this.setState({ showFormRewiew: false })} />
    }

        return <SurveyForm
                onSurveySubmit={() => this.setState({ showFormRewiew: true })}/>
    }

    render() {

        return (
            <div>
                {this.renderContent()}
            </div>
            )
    }
}


export default SurveyNew;
