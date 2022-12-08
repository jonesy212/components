import React from 'react';

const Form = () => {
    const formData = [
        { field: 'name', type: 'text', label: 'Full Name', error: true },
        { field: 'email', type: 'email', label: 'Email', error: false },
        { field: 'number', type: 'tel', label: 'Phone Number', error: false },
        { field: 'address', type: 'text', label: 'Address', error: false },
        { field: 'city', type: 'text', label: 'City', error: true },
    ];

    const createFormFields = () => formData.map(item => (
        <div className="wrapper">
            <div className="field">
                <label htmlFor={item.field}>{item.label}</label>
                <input type={item.field} id={item.field} name={item.name} placeholder={item.label}/>
            </div>
            {Error.name && <small>{`Please endter a valid ${item.field}`}</small>}
        </div>
    ))

    return (
        <form className="form-container">
            {createFormFields()}
            <input type='submit' value="Submit"/>
        </form>
    )
}

export default Form;