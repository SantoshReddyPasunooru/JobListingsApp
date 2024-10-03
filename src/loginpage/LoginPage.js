import React from 'react';
import './LoginPage.css';

function LoginPage() {
    return (
        <div>
            <form className="loginform">
                <hr/>
                <text className="bahubaligate"> Bahubali Gate</text>
                <br/>
                <text className="description"> Only Mahismathi people allowed inside after checking... </text>
                <hr/>
                <text className="loginDetailstitle"> Login Details</text>
                <hr className="loginDetailshr"/>

                <div>
                    <input type={"text"} className="usernameinput" placeholder={"  Username or Email"}/>
                    <input type={"text"} className="passwordinput" placeholder={"  Password"}/>
                    <button type={"submit"} className="loginbutton">Login</button>
                    <button type={"submit"} className="registerbutton">Register</button>
                    <br/>
                    <text className="forgotpassword"><b>forgot password ?</b></text>
                    <hr/>
                </div>


            </form>
        </div>
    );
}

export default LoginPage;
