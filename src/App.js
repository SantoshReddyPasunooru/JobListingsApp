import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginpage/LoginPage';
import RegistrationPage from './registrationpage/RegistrationPage';
import HomePage from './HomePage/HomePage'; // Import the HomePage component
import ProfilePage from './ProfilePage/ProfilePage';
import JobDetails from './JobDetails/JobDetails';
import Applications from './Applications/Applications';
import $ from 'jquery'; // Import jQuery

import './App.css';

function App() {
    React.useEffect(() => {
        // jQuery smooth scroll effect
        $('a').on('click', function(event) {
            event.preventDefault();
            const target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });

        return () => {
            $('a').off('click'); // Cleanup
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element = {<RegistrationPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/jobpage" element={<JobDetails />} />
                    <Route path="/application" element={<Applications />} />
                </Routes>

            </div>

        </Router>
    );
}

export default App;
