// src/components/Overview.js
import React from 'react';
import './Overview.css';

const Overview = () => {
    return (
        <section id="overview" className="section">
            <h2>Our Services</h2>
            <div className="services">
                <div className="service-card">
                    <h3>Patient Management</h3>
                    <p>Manage patient records and appointments efficiently.</p>
                </div>
                <div className="service-card">
                    <h3>Billing</h3>
                    <p>Streamline your billing process with our easy-to-use system.</p>
                </div>
                <div className="service-card">
                    <h3>Analytics</h3>
                    <p>Access detailed analytics to enhance decision-making.</p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
