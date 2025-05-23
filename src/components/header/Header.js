import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <header className={`header-container ${menuOpen ? 'active' : ''}`}>
      <div className="logo">
        <Link to="/">Hugo CEMELI</Link> 
      </div>

      {/* Hamburger icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav>
        <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <li><Link to="/" className="nav-link">Accueil</Link></li>
          <li><Link to="/skills" className="nav-link">Compétences</Link></li>
          <li><Link to="/realizations" className="nav-link">Réalisations</Link></li>
          <li><Link to="/blog" className="nav-link">Blog</Link></li>        
          <li><Link to="/contact" className="nav-link">Me contacter</Link></li>
        </ul>  
          
      </nav>
    </header>
  );
};

export default Header;
