import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../assets/data/portfolioData';
import resumeFile from '../assets/resume/WAGHMARE_ONKAR.pdf'; // Make sure the filename matches exactly
import profileImage from '../assets/images/onkar new.jpg'; // Import the image correctly

const Header = () => {
     const handleResumeClick = () => {
          // Open the resume in a new tab
          window.open(resumeFile, '_blank');
     };

     const handleDownloadResume = (e) => {
          e.stopPropagation();
          // Create a temporary anchor element to trigger download
          const link = document.createElement('a');
          link.href = resumeFile;
          link.download = 'Onkar_Waghmare_Resume.pdf'; // This will be the filename when downloaded
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

     return (
          <header id="home" className="modern-header">
               <div className="header-overlay"></div>
               <div className="container">
                    <div className="header-content">
                         <div className="header-text">
                              <h4 className="header-subtitle">HELLO & WELCOME</h4>
                              <h1 className="header-title">
                                   I'm <span className="text-highlight">{portfolioData.name}</span>
                              </h1>
                              <div className="type-animation-wrapper">
                                   <TypeAnimation
                                        sequence={[
                                             portfolioData.title,
                                             1500,
                                             'Digital Creator',
                                             1500,
                                             'Problem Solver',
                                             1500,
                                             'Tech Enthusiast',
                                             1500,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                   />
                              </div>
                              <p className="header-description">
                                   Crafting digital experiences that are beautiful, functional, and user-focused.
                                   Let's build something amazing together.
                              </p>
                              <div className="header-actions">
                                   <a href="#contact" className="btn-primary">
                                        Get In Touch
                                   </a>
                                   <div className="resume-container">
                                        <button onClick={handleResumeClick} className="btn-secondary">
                                             View My Resume
                                        </button>
                                        <button onClick={handleDownloadResume} className="btn-download">
                                             <i className="fas fa-download"></i>
                                        </button>
                                   </div>
                              </div>
                         </div>
                         <div className="header-image">
                              <div className="image-container">
                                   <img
                                        src={profileImage} // Use the imported image here
                                        alt={portfolioData.name}
                                        className="profile-image"
                                   />
                                   <div className="image-border"></div>
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
                    </div>
               </div>
               <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="arrow-down"></div>
               </div>
          </header>
     );
};

export default Header;