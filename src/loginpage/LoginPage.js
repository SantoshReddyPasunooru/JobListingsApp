// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import $ from 'jquery'; // Import jQuery

function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle registration button click
    const registerbutton = (e) => {
        e.preventDefault();
        navigate('/register');
    };

    // Function to handle login button click
    const handleLogin = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            setError('Both username and password are required.');
            return;
        }
        // Assume validation passed
        setError('');

        // Show loading spinner
        $('.loading-spinner').css('display', 'block'); // Show the spinner

        // Simulate API call with setTimeout
        setTimeout(() => {
            // Assume login is successful
            $('.loading-spinner').css('display', 'none'); // Hide the spinner
            navigate('/home');
        }, 2000);

    };

    return (
        <div className="LoginPagecontainer">
            <div className="loginform">
                <h1 className="jlpage">Job Listings Page</h1>
                <h2 className="description">1000+ jobs updated every day...</h2>
                <h3 className="loginDetailstitle">Login Details</h3>
                <hr />
                {error && <p className="error">{error}</p>} {/* Display error message */}
                <div className="logindetailsentry">
                    <input
                        type="text"
                        className="usernameinput"
                        placeholder="Username or Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        className="passwordinput"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="buttonContainer">
                        <button onClick={handleLogin} className="loginbutton">Login</button>
                        <button onClick={registerbutton} className="registerbutton">Register</button>
                    </div>
                    <span className="forgotpassword"><b>Forgot password?</b></span>
                    <hr />
                    {/* Loading spinner */}
                    <div className="loading-spinner"></div>

                </div>
                <div className="footer">
                    <p>&copy; 2024 GettingHired.com</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
