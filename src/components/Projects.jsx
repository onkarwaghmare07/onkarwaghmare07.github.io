/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { portfolioData } from '../assets/data/portfolioData';

const Projects = () => {
     return (
          <section id="projects" className="modern-projects">
               <div className="container">
                    <div className="section-header">
                         <h2 className="section-title" style={{ textAlign: 'center' }}>
                              My <span className="text-highlight">Projects</span>
                         </h2>
                         <p className="section-subtitle" style={{ textAlign: 'center' }}>
                              Here are some of my recent projects. Each project was carefully crafted to solve specific problems and deliver exceptional user experiences.
                         </p>
                    </div>

                    <div className="projects-grid">
                         {portfolioData.projects.map((project, index) => (
                              <div key={index} className="project-card">
                                   <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                             <div className="project-links">
                                                  <a href={"https://github.com/onkarw772/hospital-management"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fas fa-link"></i> Live Demo
                                                  </a>
                                                  <a href={"https://github.com/onkarw772/hospital-management"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fab fa-github"></i> View Code
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                             {project.tags.map((tag, i) => (
                                                  <span key={i} className="project-tag">{tag}</span>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                         {portfolioData.projects.map((project, index) => (
                              <div key={index} className="project-card">
                                   <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                             <div className="project-links">
                                                  <a href={"https://github.com/onkarw772/event_planner"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fas fa-link"></i> Live Demo
                                                  </a>
                                                  <a href={"https://github.com/onkarw772/event_planner"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fab fa-github"></i> View Code
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                             {project.tags.map((tag, i) => (
                                                  <span key={i} className="project-tag">{tag}</span>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                         {portfolioData.projects.map((project, index) => (
                              <div key={index} className="project-card">
                                   <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                             <div className="project-links">
                                                  <a href={"https://github.com/onkarw772/marrige-Web"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fas fa-link"></i> Live Demo
                                                  </a>
                                                  <a href={"https://github.com/onkarw772/marrige-Web"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fab fa-github"></i> View Code
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                             {project.tags.map((tag, i) => (
                                                  <span key={i} className="project-tag">{tag}</span>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
                    <div className="projects-grid">
                         {portfolioData.projects.map((project, index) => (
                              <div key={index} className="project-card">
                                   <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                             <div className="project-links">
                                                  <a href={"https://www.kaggle.com/code/onkar310204/project-1"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fas fa-link"></i> Live Demo
                                                  </a>
                                                  <a href={"https://www.kaggle.com/code/onkar310204/project-1"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fab fa-github"></i> View Code
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                             {project.tags.map((tag, i) => (
                                                  <span key={i} className="project-tag">{tag}</span>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                         {portfolioData.projects.map((project, index) => (
                              <div key={index} className="project-card">
                                   <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                             <div className="project-links">
                                                  <a href={"https://www.kaggle.com/code/onkar310204/project-2"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fas fa-link"></i> Live Demo
                                                  </a>
                                                  <a href={"https://www.kaggle.com/code/onkar310204/project-2"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fab fa-github"></i> View Code
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                             {project.tags.map((tag, i) => (
                                                  <span key={i} className="project-tag">{tag}</span>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                         {portfolioData.projects.map((project, index) => (
                              <div key={index} className="project-card">
                                   <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                             <div className="project-links">
                                                  <a href={"https://www.kaggle.com/code/onkar310204/project-3"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fas fa-link"></i> Live Demo
                                                  </a>
                                                  <a href={"https://www.kaggle.com/code/onkar310204/project-3"} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       <i className="fab fa-github"></i> View Code
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                             {project.tags.map((tag, i) => (
                                                  <span key={i} className="project-tag">{tag}</span>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>


                    <div className="view-more">
                         <a href="#" className="btn-secondary">
                              View All Projects
                         </a>
                    </div>
               </div>
          </section>
     );
};

export default Projects;