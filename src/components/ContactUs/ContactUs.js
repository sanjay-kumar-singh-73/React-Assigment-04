// src/components/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message, ${formData.name}! We'll get back to you at ${formData.email}.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact-us" className="section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Name:</label> */}
                <input type="text" id="name" name="name" placeholder='User-Name' className='input' value={formData.name} onChange={handleChange} required /> <br/>
                
                {/* <label htmlFor="email">Email:</label> */}
                <input type="email" id="email" name="email" placeholder='User-email' className='input'  value={formData.email} onChange={handleChange} required /> <br/>
                
                {/* <label htmlFor="message">Message:</label> */}
                <textarea id="message" name="message" className='text' value={formData.message} onChange={handleChange} required></textarea> <br/>
                
                <button type="submit" className='btn'>Send Message</button>
            </form>
            <div className="contact-details">
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> info@company.com</p>
            </div>
        </section>
    );
};

export default ContactUs;
