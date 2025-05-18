import React, { useState } from 'react';
import { portfolioData } from '../assets/data/portfolioData';

const Contact = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: ''
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({
               ...prev,
               [name]: value
          }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form submitted:', formData);
          alert('Message sent successfully!');
          setFormData({
               name: '',
               email: '',
               subject: '',
               message: ''
          });
     };

     return (
          <section id="contact" className="modern-contact">
               <div className="container">
                    <div className="section-header">
                         <h2 className="section-title">
                              Let's <span className="text-highlight">Connect</span>
                         </h2>
                         <p className="section-subtitle">
                              Have a project in mind or want to discuss opportunities? Reach out!
                         </p>
                    </div>

                    <div className="contact-container">
                         <div className="contact-info">
                              <div className="info-card">
                                   <div className="info-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                   </div>
                                   <div className="info-content">
                                        <h3>Location</h3>
                                        <p>{portfolioData.address}</p>
                                   </div>
                              </div>

                              <div className="info-card">
                                   <div className="info-icon">
                                        <i className="fas fa-envelope"></i>
                                   </div>
                                   <div className="info-content">
                                        <h3>Email</h3>
                                        <p>{portfolioData.email}</p>
                                   </div>
                              </div>

                              <div className="info-card">
                                   <div className="info-icon">
                                        <i className="fas fa-phone-alt"></i>
                                   </div>
                                   <div className="info-content">
                                        <h3>Phone</h3>
                                        <p>{portfolioData.phone}</p>
                                   </div>
                              </div>

                              <div className="social-links">
                                   {portfolioData.socialLinks.map((social, index) => (
                                        <a
                                             key={index}
                                             href={social.url}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="social-icon"
                                        >
                                             <i className={social.icon}></i>
                                        </a>
                                   ))}
                              </div>
                         </div>

                         <form onSubmit={handleSubmit} className="contact-form">
                              <div className="form-group">
                                   <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                   />
                              </div>
                              <div className="form-group">
                                   <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                   />
                              </div>
                              <div className="form-group">
                                   <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                   />
                              </div>
                              <div className="form-group">
                                   <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="5"
                                        required
                                   ></textarea>
                              </div>
                              <button type="submit" className="submit-btn">
                                   Send Message <i className="fas fa-paper-plane"></i>
                              </button>
                         </form>
                    </div>
               </div>
          </section>
     );
};

export default Contact;