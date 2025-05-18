/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { portfolioData } from '../assets/data/portfolioData';

const Footer = () => {
     return (
          <footer className="modern-footer">
               <div className="container">
                    <div className="footer-content">
                         <div className="footer-about">
                              <h3 className="footer-title">{portfolioData.name}</h3>
                              <p className="footer-description">
                                   Creating digital experiences that inspire and engage.
                                   Let's collaborate to bring your vision to life.
                              </p>
                              <div className="footer-social">
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

                         <div className="footer-links">
                              <h3 className="footer-title">Quick Links</h3>
                              <ul>
                                   <li><a href="#home">Home</a></li>
                                   <li><a href="#about">About</a></li>
                                   <li><a href="#skills">Skills</a></li>
                                   <li><a href="#projects">Projects</a></li>
                                   <li><a href="#contact">Contact</a></li>
                              </ul>
                         </div>

                         <div className="footer-services">
                              <h3 className="footer-title">Services</h3>
                              <ul>
                                   <li><a href="#">Web Development</a></li>
                                   <li><a href="#">UI/UX Design</a></li>
                                   <li><a href="#">Mobile Apps</a></li>
                                   <li><a href="#">SEO Optimization</a></li>
                                   <li><a href="#">Branding</a></li>
                              </ul>
                         </div>

                         <div className="footer-newsletter">
                              <h3 className="footer-title">Stay Updated</h3>
                              <p>Subscribe to my newsletter for the latest updates and insights.</p>
                              <form className="newsletter-form">
                                   <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        required
                                   />
                                   <button type="submit">Subscribe</button>
                              </form>
                         </div>
                    </div>

                    <div className="footer-bottom">
                         <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
                         <div className="legal-links">
                              <a href="#">Privacy Policy</a>
                              <a href="#">Terms of Service</a>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;