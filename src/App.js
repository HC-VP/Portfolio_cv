import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Accueil from './pages/accueil/Accueil';
import Skills from './pages/skills/Skills';
import Realizations from './pages/realizations/Realizations';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import MentionsLegales from './pages/mentions/mentions';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div>        
        <Routes>          
          <Route path="/" element={<Accueil />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/realizations" element={<Realizations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mentions" element={<MentionsLegales />} />
        </Routes>        
      </div>
      <Footer />
    </Router>
  );
};

export default App;
