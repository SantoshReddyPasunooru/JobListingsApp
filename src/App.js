import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginpage/LoginPage';
import RegistrationPage from './registrationpage/RegistrationPage';
import HomePage from './HomePage/HomePage'; // Import the HomePage component

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element = {<RegistrationPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>

            </div>

        </Router>
    );
}

export default App;
