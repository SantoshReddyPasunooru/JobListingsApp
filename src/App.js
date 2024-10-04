import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginpage/LoginPage';
import RegistrationPage from './registrationpage/RegistrationPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element = {<RegistrationPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
