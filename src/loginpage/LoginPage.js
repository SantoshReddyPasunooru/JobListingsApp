// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle registration button click
    const registerbutton = (e) => {
        e.preventDefault();
        navigate('/register'); // Navigate to the registration page
    };

    return (
        <div className="LoginPagecontainer">
            <div className="loginform">
                <h1 className="jlpage">Job Listings Page</h1>
                <h2 className="description">1000+ jobs updated every day...</h2>
                <h3 className="loginDetailstitle">Login Details</h3>
                <hr />

                <div className="logindetailsentry">
                    <input type="text" className="usernameinput" placeholder="  Username or Email" />
                    <input type="password" className="passwordinput" placeholder="  Password" />
                    <div className="buttonContainer">
                        <button type="button" onClick={() => navigate('/home')} className="loginbutton">Login</button>
                        <button type="button" onClick={registerbutton} className="registerbutton">Register</button>
                    </div>
                    <span className="forgotpassword"><b>Forgot password?</b></span>
                    <hr />
                </div>
                <div className="footer">
                    <p>&copy; 2024 GettingHired.com</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
