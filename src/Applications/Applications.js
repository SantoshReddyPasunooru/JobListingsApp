// Applications.js
import './Applications.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Applications() {
    const navigate = useNavigate();
    const applications = [
        { id: 1, role: 'Software Engineer', company: 'Company A', status: 'Accepted' },
        { id: 2, role: 'Data Analyst', company: 'Company B', status: 'Rejected' },
        { id: 3, role: 'Product Manager', company: 'Company C', status: 'Pending' },
        // Add more application entries as needed
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="applicationsPage">
            <div className="top-right-nav">
                <span onClick={() => handleNavigation('/home')}>Jobs</span> |
                <span onClick={() => handleNavigation('/profile')}>Profile Page</span> |
                <span onClick={() => handleNavigation('/')}>Logout</span>
            </div>
            <div className="applicationsContainer">
                <h1 className="applicationsTitle">Applications</h1>
                <div className="applicationsList">
                    {applications.map((application) => (
                        <div key={application.id} className="applicationCard">
                            <h3>{application.role}</h3>
                            <p>Company: {application.company}</p>
                            <p>Status: {application.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Applications;
