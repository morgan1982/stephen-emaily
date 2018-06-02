import React from 'react';

export default ({ input, label }) => { // destructed props

    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
        </div>
        )
}
// ...input will copy the methods of input on redux-form
