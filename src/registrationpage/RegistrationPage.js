import React from 'react';
import './RegistrationPage.css';

function RegistrationPage() {
    return (
        <div className="registrationpage">
            <form className="registrationForm">
                <h1 className="pageTitle">Registration Form</h1>
                <h1 className="detailsTitle">Enter Your Details</h1>

                <div className="inputContainer">
                    <input type="text" className="inputField" placeholder="First Name" />
                    <input type="text" className="inputField" placeholder="Middle Name" />
                    <input type="text" className="inputField" placeholder="Last Name" />
                    <input type="date" className="inputField" placeholder="Date of Birth" />
                    <input type="text" className="inputField" placeholder="Highest Education Degree" />
                    <input type="text" className="inputField" placeholder="CGPA" />
                    <input type="text" className="inputField" placeholder="Current Job Title" />
                    <input type="text" className="inputField" placeholder="Current Job Company" />
                    <input type="email" className="inputField" placeholder="Email" />
                    <input type="password" className="inputField" placeholder="Password" />
                    <input type="password" className="inputField" placeholder="Reenter Password" />
                </div>
                <button type="submit" className="button">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
