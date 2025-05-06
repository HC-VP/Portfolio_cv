import React from 'react';
import { Helmet } from "react-helmet";
import './Skills.css';

const Skills = () => {
  return (
    
  <div className="services-container">
    <Helmet>
      <title>Compétences - Hugo Cemeli</title>
    </Helmet>

    <div className="services-background">

      <div className="services-image">
        <img src="/images/competences_banner.jpg" alt="Compétences Banner" />
      </div>

      <div className="skills-content">

        <div className="skills-header">
          <h1>MES COMPÉTENCES</h1>
          <p>Voici les compétences développées au cours de ma formation.</p>
        </div>

        <div className="skills-section">
          <div className="skills-block">
            <h2>Transversales</h2>
            <ul>
              <li>Git / GitHub</li>
              <li>Requêtes HTTP & REST API</li>
              <li>Architecture MVC</li>
              <li>Méthodologies agiles</li>
              <li>Organisation de projet</li>
              <li>Communication technique</li>
            </ul>
          </div>

          <div className="skills-columns">
            <div className="skills-block">
              <h2>Front-End</h2>
              <div className="ProgressBar"><h4>HTML5 90%</h4><div className="progress" style={{ width: '90%', backgroundColor: '#d9534f' }}></div></div>
              <div className="ProgressBar"><h4>CSS3 80%</h4><div className="progress" style={{ width: '80%', backgroundColor: '#5bc0de' }}></div></div>
              <div className="ProgressBar"><h4>JavaScript 70%</h4><div className="progress" style={{ width: '70%', backgroundColor: '#f0ad4e' }}></div></div>
              <div className="ProgressBar"><h4>React 75%</h4><div className="progress" style={{ width: '75%', backgroundColor: '#0275d8' }}></div></div>
              <div className="ProgressBar"><h4>Angular 50%</h4><div className="progress" style={{ width: '50%', backgroundColor: '#d9538f' }}></div></div>
            </div>

            <div className="skills-block">
              <h2>Back-End</h2>
              <div className="ProgressBar"><h4>PHP 60%</h4><div className="progress" style={{ width: '60%', backgroundColor: '#5bc0de' }}></div></div>
              <div className="ProgressBar"><h4>Node.js 50%</h4><div className="progress" style={{ width: '50%', backgroundColor: '#6c757d' }}></div></div>
              <div className="ProgressBar"><h4>MySQL 60%</h4><div className="progress" style={{ width: '60%', backgroundColor: '#00796b' }}></div></div>
              <div className="ProgressBar"><h4>API REST 70%</h4><div className="progress" style={{ width: '70%', backgroundColor: '#5e35b1' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Skills;
