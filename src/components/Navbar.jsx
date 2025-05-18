/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { portfolioData } from '../assets/data/portfolioData';

const Navbar = () => {
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 50) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
               <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                         <span className="text-primary">Port</span>folio
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                         <ul className="navbar-nav ms-auto">
                              <li className="nav-item">
                                   <Link className="nav-link active" to="home" spy={true} >Home</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className="nav-link" to="about" spy={true} >About</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className="nav-link" to="skills" spy={true} >Skills</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className="nav-link" to="projects" spy={true} >Projects</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className="nav-link" to="experience" spy={true} >Experience</Link>
                              </li>
                              <li className="nav-item">
                                   <Link className="nav-link" to="contact" spy={true} >Contact</Link>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;