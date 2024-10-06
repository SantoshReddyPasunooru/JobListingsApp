import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className="ProfilePage">
            <div className="top-right-nav">
                <span onClick={() => handleNavigation('/home')}>Jobs</span> |
                <span onClick={() => handleNavigation('/application')}>Application Dashboard</span> |
                <span onClick={() => handleNavigation('/')}>Logout</span>
            </div>
            <div className="profileContainer">
                <h1 className="profileTitle">User Profile</h1>
                <div className="profileDetails">
                    <div className="profilePicture">
                        <img src="https://via.placeholder.com/150" alt="Profile"/>
                        <button className="changePictureButton">Change Picture</button>
                    </div>
                    <div className="userInfo">
                        <label>Name: <span>John Doe</span></label>
                        <label>Phone Number: <span>(123) 456-7890</span></label>
                        <label>Email: <span>johndoe@example.com</span></label>
                    </div>
                </div>
                <div className="uploadSection">
                    <label htmlFor="resumeUpload" className="uploadLabel">Upload Resume:</label>
                    <input type="file" id="resumeUpload" className="resumeUpload"/>
                </div>
            </div>
            <footer>
                <div className="footer-content">
                    <p>&copy; 2024 Your Company Name</p>
                    <p>Address: 1234 Your Street, Your City, Your Country ; Email: info@yourcompany.com ; Phone: +1 234
                        567
                        890</p>
                </div>
            </footer>
        </div>
    );
}

export default ProfilePage;
