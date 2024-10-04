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
            <form className="loginform">
                <text className="jlpage"> Job Listings Page</text>
                <text className="description"> 1000+ jobs updated everyday... </text>
                <text className="loginDetailstitle"> Login Details</text>
                <hr/>

                <div>
                    <input type={"text"} className="usernameinput" placeholder={"  Username or Email"}/>
                    <input type={"text"} className="passwordinput" placeholder={"  Password"}/>
                    <button type={"submit"} className="loginbutton">Login</button>
                    <button type={"button"} onClick={registerbutton} className="registerbutton">Register</button>
                    <br/>
                    <text className="forgotpassword"><b>forgot password ?</b></text>
                    <hr/>
                </div>


            </form>
        </div>
    );
}

export default LoginPage;
