import React from 'react';
import { portfolioData } from '../assets/data/portfolioData';

const Skills = () => {
     return (
          <section id="skills" className="modern-skills">
               <div className="container">
                    <div className="section-header">
                         <h2 className="section-title" style={{ textAlign: 'center' }}>
                              My <span className="text-highlight">Skills</span>
                         </h2>
                         <p className="section-subtitle" style={{ textAlign: 'center' }}>Technologies I work with</p>
                    </div>

                    <div className="skills-container">
                         <div className="skills-grid">
                              {portfolioData.skills.map((skill, index) => (
                                   <div key={index} className="skill-item">
                                        <div className="skill-header">
                                             <span className="skill-name">{skill.name}</span>
                                             <span className="skill-percent">{skill.percentage}%</span>
                                        </div>
                                        <div className="skill-progress">
                                             <div
                                                  className="progress-bar"
                                                  style={{ width: `${skill.percentage}%` }}
                                             ></div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>

                    <div className="tech-stack">
                         <h3 className="tech-stack-title">Tech Stack</h3>
                         <div className="tech-icons">
                              {portfolioData.techStack.map((tech, index) => (
                                   <div key={index} className="tech-icon" title={tech.name}>
                                        <i className={tech.icon}></i>
                                        <span className="tech-tooltip">{tech.name}</span>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Skills;