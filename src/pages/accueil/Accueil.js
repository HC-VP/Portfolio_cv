import React from 'react';
import { Helmet } from "react-helmet";
import './Accueil.css';

function Accueil() {
  return (
    <div className="accueil-container">
      <Helmet>
        <title>Hugo CEMELI Portfolio</title>
        <meta name="description" content="Bienvenue sur le portfolio de Hugo CEMELI, mettant en avant l'évolution de ses compétences de développeur fullstack." />
        <meta name="keywords" content="portfolio, web development, Hugo CEMELI, React, JavaScript, HTML, CSS" />
        <meta property="og:title" content="Portfolio de Hugo CEMELI" />
        <meta property="og:description" content="Portfolio personnel de Hugo CEMELI, mettant en valeur ses compétences de développeur et ses réalisations." />
        <meta property="og:image" content="/images/background-banner.jpg" />
        <meta property="og:url" content="https://john-doe-portfolio.com" />
      </Helmet>
      <div className="background-image">
        <div className="background-content">
          <div className="background-portrait">
            <img src="/images/MeGibli_NoBack.jpg" alt="Hugo CEMELI" />
          </div>
          
          <div className="banner-container">
            <div className="banner-text">
              <h1>Bonjour, je suis Hugo CEMELI</h1>
              <div className="divider"></div>
              <p>Développeur web full stack</p>
              
            </div>
          </div>

          
          
        </div>
      </div>
      <div className="about-container" id="about">
        <div className="about-content">
          <div className="about-details">
            <h3>À propos</h3>
            <div className="line"></div>

            <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation <strong>de développeur web fullstack</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
            
            <p>Basé près de Tarbes, je recherche une alternance pour consolider ma formation et développer mes acquis</p>
            
            <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web</p>
          </div> 
          
          
        </div>
      </div>
    </div>
    
  );
}

export default Accueil;
