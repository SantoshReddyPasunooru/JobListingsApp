// RegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

function RegistrationPage() {
    const navigate = useNavigate();
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

        // Check for non-filled required fields
        for (let key in formData) {
            if (formData[key].trim() === '' && key !== 'middleName') {
                setError(`Please fill in the ${key.split(/(?=[A-Z])/).join(" ").toLowerCase()} field.`);
                return;
            }
        }

        // Password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
            setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        // Password match validation
        if (formData.password !== formData.reenterPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Date of birth validation to check age is at least 18
        const dob = new Date(formData.dob);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        if (age < 18) {
            setError("You must be at least 18 years old to register.");
            return;
        }

        setError(''); // Clear any existing errors
        console.log("Form submitted", formData);
        navigate('/home'); // Navigation on successful registration
    };

    return (
        <div className="registrationpage">
            <form className="registrationForm" onSubmit={handleSubmit}>
                <h1 className="pageTitle">Registration Form</h1>
                <h2 className="detailsTitle">Enter Your Details</h2>
                {error && <p className="error">{error}</p>}
                <div className="inputContainer">
                    <input type="text" className="inputField" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    <input type="text" className="inputField" placeholder="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} />
                    <input type="text" className="inputField" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    <input type="date" className="inputField" placeholder="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} required />
                    <select className="inputField" name="highestEducation" value={formData.highestEducation} onChange={handleChange} required>
                        <option value="">Select Education</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Btech">Btech</option>
                        <option value="Masters">Masters</option>
                        <option value="Phd">Phd</option>
                    </select>
                    <input type="number" step="0.01" className="inputField" placeholder="CGPA" name="cgpa" value={formData.cgpa} onChange={handleChange} required />
                    <input type="text" className="inputField" placeholder="Current Job Title" name="currentJobTitle" value={formData.currentJobTitle} onChange={handleChange} required />
                    <input type="text" className="inputField" placeholder="Current Job Company" name="currentJobCompany" value={formData.currentJobCompany} onChange={handleChange} required />
                    <input type="email" className="inputField" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                    <input type="password" className="inputField" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    <input type="password" className="inputField" placeholder="Reenter Password" name="reenterPassword" value={formData.reenterPassword} onChange={handleChange} required />
                </div>
                <button type="submit" className="registrationbutton">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
