// RegistrationPage.js
import React, { useState } from 'react';
import './RegistrationPage.css';

function RegistrationPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        highestEducation: '',
        cgpa: '',
        currentJobTitle: '',
        currentJobCompany: '',
        email: '',
        password: '',
        reenterPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in formData) {
            if (formData[key].trim() === '') {
                setError(`Please fill in the ${key.split(/(?=[A-Z])/).join(" ").toLowerCase()} field.`);
                return;
            }
        }
        if (formData.password !== formData.reenterPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError('');
        // Submit the form data
        console.log("Form submitted", formData);
    };

    return (
        <div className="registrationpage">
            <form className="registrationForm" onSubmit={handleSubmit}>
                <h1 className="pageTitle">Registration Form</h1>
                <h2 className="detailsTitle">Enter Your Details</h2>
                {error && <p className="error">{error}</p>}
                <div className="inputContainer">
                    {Object.keys(formData).map((key) => (
                        <input
                            key={key}
                            type={key.toLowerCase().includes("password") ? "password" : key.toLowerCase().includes("email") ? "email" : "text"}
                            className="inputField"
                            placeholder={key.split(/(?=[A-Z])/).join(" ").replace(/^./, str => str.toUpperCase())}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <button type="submit" className="button">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
