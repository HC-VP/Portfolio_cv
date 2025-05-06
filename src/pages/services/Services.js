import React from 'react';
import { Helmet } from "react-helmet";
import './Services.css';

const Services = () => {
  return (
    
    <div className="services-container">

      <Helmet>
        <title>Services - John Doe Portfolio</title>
        <meta
          name="description"
          content="Discover the services offered by John Doe in web development, full-stack solutions, and more."
        />
        <meta
          name="keywords"
          content="services, web development, full-stack, John Doe, React"
        />
        <meta property="og:title" content="Services - John Doe Portfolio" />
        <meta
          property="og:description"
          content="Explore the web development services offered by John Doe, including React, JavaScript, full-stack solutions."
        />
        <meta property="og:image" content="/images/blog/google.jpg" />
        <meta property="og:url" content="https://john-doe-portfolio.com/services" />
      </Helmet>


      
      <div className="services-image">
        <img src="/images/banner.jpg" alt="Services Banner" />
      </div>

      <div className='column'>
        <h1>MES COMPETENCES</h1>      
          <p>Voici les compétences développées au cours de ma formation.</p>

          <div className="ProgressBar">
            <h4>HTML5 90%</h4>
          <div className="progress" style={{ width: '90%', backgroundColor: '#d9534f' }}></div>
          </div>
                     
          <div className="ProgressBar">
              <h4>CSS3 80%</h4>
          <div className="progress" style={{ width: '80%', backgroundColor: '#5bc0de' }}></div>
          </div>
            
          <div className="ProgressBar">
            <h4>JavaScript 70%</h4>
          <div className="progress" style={{ width: '70%', backgroundColor: '#f0ad4e' }}></div>
          </div>
            
          <div className="ProgressBar">
            <h4>PHP 60%</h4>
          <div className="progress" style={{ width: '60%', backgroundColor: '#5bc0de' }}></div>
          </div>

          <div className="ProgressBar">
            <h4>React 50%</h4>
          <div className="progress" style={{ width: '50%', backgroundColor: '#0275d8' }}></div>
          </div>
            
              
         
      </div>
      
    </div>
  );
};

export default Services;
