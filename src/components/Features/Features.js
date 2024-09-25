// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section id="features" className="section">
            <h2>Key Features</h2>
            <div className="features">
                <div className="feature-card">
                    <i className="fas fa-users"></i>
                    <h3>User-Friendly</h3>
                    <p>Easy to navigate and use for all team members.</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-chart-line"></i>
                    <h3>Advanced Analytics</h3>
                    <p>Get deep insights into your data.</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-lock"></i>
                    <h3>Secure</h3>
                    <p>Your data is protected with top-tier security.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
