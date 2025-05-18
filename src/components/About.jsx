import React from 'react';
import { portfolioData } from '../assets/data/portfolioData';

const About = () => {
     return (
          <section id="about" className="modern-about">
               <div className="container">
                    <div className="section-header">
                         <h2 className="section-title" style={{ textAlign: 'center' }}>
                              About <span className="text-highlight">Me</span>
                         </h2>
                         <p className="section-subtitle" style={{ textAlign: 'center' }}>get to know me better</p>
                    </div>

                    <div className="about-content">
                         <div className="about-image-container">
                              <div className="image-wrapper">
                                   {/* <img
                                        src="/images/on.jpg"
                                        alt={portfolioData.name}
                                        className="profile-image"
                                   /> */}
                                   <div className="experience-badge">
                                        <span>5+</span>
                                        <p>Years Experience</p>
                                   </div>
                                   <div className="image-border"></div>
                              </div>
                         </div>

                         <div className="about-details">
                              <h3 className="about-title">
                                   I'm <span className="text-highlight">{portfolioData.name}</span>
                              </h3>
                              <p className="about-description">
                                   {portfolioData.about}
                              </p>

                              <div className="about-info-grid">
                                   <div className="info-item">
                                        <span className="info-label">Name:</span>
                                        <span className="info-value">{portfolioData.name}</span>
                                   </div>
                                   <div className="info-item">
                                        <span className="info-label">Email:</span>
                                        <span className="info-value">{portfolioData.email}</span>
                                   </div>
                                   <div className="info-item">
                                        <span className="info-label">Phone:</span>
                                        <span className="info-value">{portfolioData.phone}</span>
                                   </div>
                                   <div className="info-item">
                                        <span className="info-label">From:</span>
                                        <span className="info-value">{portfolioData.address}</span>
                                   </div>
                                   <div className="info-item">
                                        <span className="info-label">Freelance:</span>
                                        <span className="info-value">Available</span>
                                   </div>
                                   <div className="info-item">
                                        <span className="info-label">Languages:</span>
                                        <span className="info-value">Marathi, English, Hindi</span>
                                   </div>
                              </div>

                              <div className="about-actions">
                                   <a href="#contact" className="btn-primary">
                                        Contact Me
                                   </a>
                                   <a href="#certificates" className="btn-secondary">
                                        View Certificates
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default About;