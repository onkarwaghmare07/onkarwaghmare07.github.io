// import React, { useState, useEffect } from 'react';

// const BackToTop = () => {
//      const [isVisible, setIsVisible] = useState(false);

//      useEffect(() => {
//           const toggleVisibility = () => {
//                if (window.pageYOffset > 300) {
//                     setIsVisible(true);
//                } else {
//                     setIsVisible(false);
//                }
//           };

//           window.addEventListener('scroll', toggleVisibility);
//           return () => window.removeEventListener('scroll', toggleVisibility);
//      }, []);

//      const scrollToTop = () => {
//           window.scrollTo({
//                top: 0,
//                behavior: 'smooth'
//           });
//      };

//      // return (
//      //      // <button
//      //      //      id="backToTop"
//      //      //      className={`btn btn-primary back-to-top ${isVisible ? 'active' : ''}`}
//      //      //      onClick={scrollToTop}
//      //      // >
//      //      //      <i className="fas fa-arrow-up"></i>
//      //      // </button>
//      // );
// };

// export default BackToTop;