// JobDetails.js
import './JobDetails.css'; // Create a CSS file for styling if needed
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JobDetails() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const apply = () => {
        navigate('/application'); // Add your profile page route here
    };
    
    return (
        <div className="jobDetailsContainer">
            <h1 className="jobTitle">Software Engineer</h1>
            <h2 className="companyName">Company A</h2>
            <p className="jobDescription">
                Develop and maintain software applications. Collaborate with cross-functional teams to define, design, and ship new features. Ensure the performance, quality, and responsiveness of applications.
            </p>
            <button className="applyButton" onClick={apply}>Apply Now</button>
        </div>
    );
}

export default JobDetails;