// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';
const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            <h2>User Testimonials</h2>
            <div className='main-div'>
                <div className="testimonial-card">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fphotosbulk.com%2Fgirls-dp%2F&psig=AOvVaw0ZD0pfITEtTrsKgVKq1gUX&ust=1727331432872000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCR3Je53YgDFQAAAAAdAAAAABAE" alt="User 1" />
                <blockquote>"This platform has revolutionized our workflow!"</blockquote>
                <p>- John Doe, CEO</p>
            </div>
            <div className="testimonial-card">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Finstitute.careerguide.com%2Fgirls-dp-free-download-for-whatsapp-status%2F&psig=AOvVaw0ZD0pfITEtTrsKgVKq1gUX&ust=1727331432872000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCR3Je53YgDFQAAAAAdAAAAABAK" alt="User 2" />
                <blockquote>"The analytics feature is top-notch and incredibly insightful."</blockquote>
                <p>- Jane Smith, Health Analyst</p>
            </div>
            </div>

        </section>
    );
};

export default Testimonials;
