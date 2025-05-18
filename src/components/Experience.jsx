import React from 'react';
// import { portfolioData } from '../assets/data/portfolioData';

const Experience = () => {
     // Hardcoded experience data
     const experienceData = [
          {
               period: "2021 - Present",
               title: "Senior Frontend Developer",
               company: "Tech Solutions Inc.",
               description: "Leading frontend development team and implementing modern web applications.",
               responsibilities: [
                    "Developed responsive web applications using React.js",
                    "Led a team of 5 frontend developers",
                    "Implemented CI/CD pipelines for frontend projects",
                    "Optimized application performance reducing load time by 40%"
               ],
               skills: ["React", "TypeScript", "Redux", "GraphQL", "Jest"]
          },
          {
               period: "2018 - 2021",
               title: "Frontend Developer",
               company: "Digital Creations",
               description: "Built and maintained client-facing web applications.",
               responsibilities: [
                    "Converted legacy jQuery code to React components",
                    "Collaborated with UX designers to implement responsive designs",
                    "Participated in code reviews and mentored junior developers",
                    "Integrated REST APIs with frontend applications"
               ],
               skills: ["JavaScript", "React", "CSS3", "REST APIs", "Webpack"]
          },
          {
               period: "2016 - 2018",
               title: "Junior Web Developer",
               company: "StartUp Ventures",
               description: "Started my career building basic web applications and learning modern frameworks.",
               responsibilities: [
                    "Developed static websites using HTML/CSS/JavaScript",
                    "Assisted in building WordPress themes",
                    "Learned React and modern frontend development practices",
                    "Participated in agile development processes"
               ],
               skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"]
          }
     ];

     // Hardcoded education data
     const educationData = [
          {
               period: "2012 - 2016",
               title: "Bachelor of Computer Science",
               company: "State University",
               description: "Specialized in Software Engineering and Web Technologies.",
               achievements: [
                    "Graduated with Honors (GPA: 3.8/4.0)",
                    "Senior Project: Developed a campus navigation app",
                    "President of Computer Science Club"
               ]
          },
          {
               period: "2010 - 2012",
               title: "High School Diploma",
               company: "City High School",
               description: "Focus on Mathematics and Science.",
               achievements: [
                    "Valedictorian",
                    "National Math Olympiad winner",
                    "Developed first website for school newspaper"
               ]
          }
     ];

     return (
          <section id="experience" className="modern-experience">
               <div className="container">

                    {/* Education Section */}
                    <div className="section-header" style={{ marginTop: '80px' }}>
                         <h2 className="section-title">
                              Educational <span className="text-highlight">Background</span>
                         </h2>
                         <p className="section-subtitle">
                              My academic journey and achievements
                         </p>
                    </div>

                    <div className="timeline">
                         {educationData.map((edu, index) => (
                              <div key={`edu-${index}`} className="timeline-item">
                                   <div className="timeline-marker">
                                        <div className="marker-dot"></div>
                                        {index !== educationData.length - 1 && (
                                             <div className="marker-line"></div>
                                        )}
                                   </div>
                                   <div className="timeline-content">
                                        <div className="timeline-period">{edu.period}</div>
                                        <h3 className="timeline-title">{edu.title}</h3>
                                        <h4 className="timeline-company">{edu.company}</h4>
                                        <p className="timeline-description">{edu.description}</p>
                                        <ul className="timeline-responsibilities">
                                             {edu.achievements.map((item, i) => (
                                                  <li key={`edu-${index}-ach-${i}`}>
                                                       <i className="fas fa-award"></i> {item}
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              </div>
                         ))}
                    </div>
                    {/* Professional Experience Section */}
                    <div className="section-header">
                         <h2 className="section-title">
                              Professional <span className="text-highlight">Experience</span>
                         </h2>
                         <p className="section-subtitle">
                              My career path and the valuable experiences I've gained along the way
                         </p>
                    </div>

                    <div className="timeline">
                         {experienceData.map((exp, index) => (
                              <div key={`exp-${index}`} className="timeline-item">
                                   <div className="timeline-marker">
                                        <div className="marker-dot"></div>
                                        {index !== experienceData.length - 1 && (
                                             <div className="marker-line"></div>
                                        )}
                                   </div>
                                   <div className="timeline-content">
                                        <div className="timeline-period">{exp.period}</div>
                                        <h3 className="timeline-title">{exp.title}</h3>
                                        <h4 className="timeline-company">{exp.company}</h4>
                                        <p className="timeline-description">{exp.description}</p>
                                        <ul className="timeline-responsibilities">
                                             {exp.responsibilities.map((item, i) => (
                                                  <li key={`exp-${index}-resp-${i}`}>
                                                       <i className="fas fa-chevron-right"></i> {item}
                                                  </li>
                                             ))}
                                        </ul>
                                        {exp.skills && (
                                             <div className="timeline-skills">
                                                  {exp.skills.map((skill, i) => (
                                                       <span key={`exp-${index}-skill-${i}`} className="skill-tag">{skill}</span>
                                                  ))}
                                             </div>
                                        )}
                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     );
};

export default Experience;