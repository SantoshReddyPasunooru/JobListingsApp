// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const jobs = [
    {
        role: 'Data Analyst',
        company: 'Company B',
        timeperiod: '24 Months',
        description: 'Analyze data and provide insights for business decisions.',
    },
    {
        role: 'Product Manager',
        company: 'Company C',
        timeperiod: '24 Months',
        description: 'Manage product development and coordinate with teams.',
    },
    {
        role: 'Software Engineer',
        company: 'Company A',
        timeperiod: '24 Months',
        description: 'Develop and maintain software applications.',
    },
    {
        role: 'UX Designer',
        company: 'Company D',
        timeperiod: '24 Months',
        description: 'Create user-friendly interfaces and improve user experience.',
    },
    {
        role: 'DevOps Engineer',
        company: 'Company E',
        timeperiod: '24 Months',
        description: 'Automate deployment processes and manage CI/CD pipelines.',
    },
];

function HomePage() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const nextJob = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    };

    const prevJob = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);
    };

    const displayedJobs = [
        jobs[(currentIndex + 0) % jobs.length],
        jobs[(currentIndex + 1) % jobs.length],
        jobs[(currentIndex + 2) % jobs.length],
    ];

    return (
        <div className="home-container">
            <div className="top-right-nav">
                <span onClick={() => handleNavigation('/application')}>Application Dashboard</span> |
                <span onClick={() => handleNavigation('/profile')}>Profile Page</span> |
                <span onClick={() => handleNavigation('/')}>Logout</span>
            </div>
            <h1 className="Joblistings">Job Listings</h1>
            <div className="carousel">
                <button className="arrow-button left" onClick={prevJob}>◀</button>
                <div className="job-cards">
                    {displayedJobs.map((job, index) => (
                        <div className="job-card" key={index}>
                            <h2>{job.role}</h2>
                            <h3>{job.company}</h3>
                            <h3>{job.timeperiod}</h3>
                            <p>{job.description}</p>
                            <button className="apply-button" onClick={() => handleNavigation('/jobpage')}>Apply</button>
                        </div>
                    ))}
                </div>
                <button className="arrow-button right" onClick={nextJob}>▶</button>
            </div>
            <footer>
                <div className="footer-content">
                    <p>&copy; 2024 Your Company Name</p>
                    <p>Address: 1234 Your Street, Your City, Your Country ; Email: info@yourcompany.com ; Phone: +1 234 567 890</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
