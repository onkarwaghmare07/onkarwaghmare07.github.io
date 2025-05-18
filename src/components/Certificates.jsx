import React, { useState } from 'react';

const Certificates = () => {
     const [activeCert, setActiveCert] = useState(null);
     const [filter, setFilter] = useState('all');

     const handleDownload = (pdfPath, certTitle) => {
          try {
               const pdfFile = require(`../assets/certificates/${pdfPath}`);
               const link = document.createElement('a');
               link.href = pdfFile;
               link.download = `${certTitle.replace(/\s+/g, '_')}.pdf`;
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
          } catch (error) {
               console.error('Error downloading file:', error);
               alert('File not found or path is incorrect');
          }
     };

     const handleViewCert = (pdfPath) => {
          try {
               const pdfFile = require(`../assets/certificates/${pdfPath}`);
               // Open in new tab
               window.open(pdfFile, '_blank');
          } catch (error) {
               console.error('Error viewing file:', error);
               alert('File not found or path is incorrect');
          }
     };

     // Updated certificate data with correct file paths
     const certificatesData = [
          // Data Science Certificates
          {
               id: 1,
               title: "Data Science Professional Certificate",
               issuer: "Jobaaj Learnings",
               date: "Jun 2023",
               description: "Comprehensive data science training covering Python, ML, and statistical analysis",
               file: "jobaaj data science certificate.pdf",
               category: "data-science"
          },
          {
               id: 2,
               title: "Advanced Data Analytics",
               issuer: "DataCamp",
               date: "Mar 2023",
               description: "Mastered advanced data analysis techniques using Python and SQL",
               file: "data analytics completion_certificate.pdf",
               category: "data-science"
          },
          {
               id: 3,
               title: "Data Science Internship",
               issuer: "TechSolutions Inc.",
               date: "Aug 2022",
               description: "Completed 3-month intensive data science internship",
               file: "Data Science Internship Completion.pdf",
               category: "data-science"
          },
          {
               id: 4,
               title: "Machine Learning Fundamentals",
               issuer: "Coursera",
               date: "Jan 2023",
               description: "Stanford University's machine learning course completion",
               file: "Data Science Project Certificate From YHills.pdf",
               category: "data-science"
          },
          {
               id: 5,
               title: "Big Data Certification",
               issuer: "Cloudera",
               date: "Nov 2022",
               description: "Apache Hadoop and Spark for big data processing",
               file: "Claude AI Certificate.pdf",
               category: "data-science"
          },

          // Business & Management
          {
               id: 6,
               title: "Project Management Professional",
               issuer: "PMI",
               date: "Sep 2023",
               description: "PMI's globally recognized project management certification",
               file: "Project Management Institute (PMI)®.pdf",
               category: "business"
          },
          {
               id: 7,
               title: "Agile Scrum Master",
               issuer: "Scrum Alliance",
               date: "Jul 2022",
               description: "Certified Scrum Master with Agile methodology expertise",
               file: "Front_End Developer From iStepUp.pdf",
               category: "business"
          },
          {
               id: 8,
               title: "Digital Marketing Strategy",
               issuer: "Google Digital Garage",
               date: "May 2022",
               description: "Fundamentals of digital marketing and online strategy",
               file: "LinkedIn Learning Certificate.pdf",
               category: "business"
          },

          // Data Visualization
          {
               id: 9,
               title: "Tableau Specialist",
               issuer: "Jobaaj Learnings",
               date: "May 2023",
               description: "Data visualization and dashboard creation with Tableau",
               file: "jobaaj tableau certificate.pdf",
               category: "visualization"
          },
          {
               id: 10,
               title: "Power BI Mastery",
               issuer: "Microsoft",
               date: "Aug 2023",
               description: "Advanced Power BI for business intelligence",
               file: "power BI completion_certificate.pdf",
               category: "visualization"
          },

          // Other Certifications
          {
               id: 11,
               title: "University Degree",
               issuer: "State University",
               date: "May 2021",
               description: "Bachelor of Science in Computer Science",
               file: "1189 Onkar Nagnath Waghmare.pdf",
               category: "other"
          }
     ];

     const filteredCertificates = filter === 'all'
          ? certificatesData
          : certificatesData.filter(cert => cert.category === filter);

     return (
          <section id="certificates" className="certificates-section">
               <div className="container">
                    <div className="section-header">
                         <h2 className="section-title">
                              My <span className="text-highlight">Certifications</span>
                         </h2>
                         <p className="section-subtitle">
                              Validations of my skills and knowledge through recognized certifications
                         </p>

                         <div className="certificate-filters">
                              <button
                                   className={filter === 'all' ? 'active' : ''}
                                   onClick={() => setFilter('all')}
                              >
                                   All Certificates
                              </button>
                              <button
                                   className={filter === 'data-science' ? 'active' : ''}
                                   onClick={() => setFilter('data-science')}
                              >
                                   Data Science
                              </button>
                              <button
                                   className={filter === 'business' ? 'active' : ''}
                                   onClick={() => setFilter('business')}
                              >
                                   Business
                              </button>
                              <button
                                   className={filter === 'visualization' ? 'active' : ''}
                                   onClick={() => setFilter('visualization')}
                              >
                                   Visualization
                              </button>
                              <button
                                   className={filter === 'other' ? 'active' : ''}
                                   onClick={() => setFilter('other')}
                              >
                                   Other
                              </button>
                         </div>
                    </div>

                    <div className="certificates-grid">
                         {filteredCertificates.map((cert) => (
                              <div
                                   key={cert.id}
                                   className={`certificate-card ${activeCert === cert.id ? 'active' : ''}`}
                                   onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                              >
                                   <div className="certificate-header">
                                        <div className="issuer-logo">
                                             <i className="fas fa-certificate"></i>
                                        </div>
                                        <div className="certificate-title">
                                             <h3>{cert.title}</h3>
                                             <span className="issuer-name">{cert.issuer}</span>
                                        </div>
                                        <span className="date-badge">{cert.date}</span>
                                   </div>

                                   <div className="certificate-details">
                                        <p className="description">{cert.description}</p>

                                        <div className="certificate-actions">
                                             <button
                                                  className="view-btn"
                                                  onClick={(e) => {
                                                       e.stopPropagation();
                                                       handleViewCert(cert.file);
                                                  }}
                                             >
                                                  <i className="fas fa-eye"></i> View
                                             </button>
                                             <button
                                                  className="download-btn"
                                                  onClick={(e) => {
                                                       e.stopPropagation();
                                                       handleDownload(cert.file, cert.title);
                                                  }}
                                             >
                                                  <i className="fas fa-download"></i> Download
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Certificates;