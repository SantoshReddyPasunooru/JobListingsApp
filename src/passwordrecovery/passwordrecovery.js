// PasswordRecovery.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './passwordrecovery.css';

function PasswordRecovery() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate password recovery process
        if (email) {
            setMessage('A password recovery link has been sent to your email.');
            // Here you can add functionality to send the recovery email
        } else {
            setMessage('Please enter your email address.');
        }
    };

    return (
        <div className="passwordRecoveryContainer">
            <div className="top-right-nav">
                <span onClick={() => navigate('/')}>Login</span> |
                <span onClick={() => navigate('/register')}>Register</span>

            </div>
            <h1 className="passwordRecoveryTitle">Password Recovery</h1>
            <form onSubmit={handleSubmit} className="passwordRecoveryForm">
                <label htmlFor="email" className="emailLabel">Enter your email address:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="emailInput"
                    required
                />
                <button type="submit" className="submitButton">Recover Password</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
}

export default PasswordRecovery;
