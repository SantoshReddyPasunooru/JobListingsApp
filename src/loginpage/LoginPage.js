import React from 'react';
import './LoginPage.css';

function LoginPage() {
    return (
        <div>
            <form className="loginform">
                    <text className="loginDetailstitle"> Login Details</text>
                <div>
                    <text className="username">Username :</text>
                    <input type={"text"} className="usernameinput" placeholder={"Enter Username"} />
                </div>


            </form>
        </div>
    );
}

export default LoginPage;
