// Applications.js
import './Applications.css'; // Create a CSS file for styling if needed
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Applications() {
    const applications = [
        { id: 1, role: 'Software Engineer', company: 'Company A', status: 'Accepted' },
        { id: 2, role: 'Data Analyst', company: 'Company B', status: 'Rejected' },
        { id: 3, role: 'Product Manager', company: 'Company C', status: 'Pending' },
        // Add more application entries as needed
    ];

    return (
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
    );
}

export default Applications;
