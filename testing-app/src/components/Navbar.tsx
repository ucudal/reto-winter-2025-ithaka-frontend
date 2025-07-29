import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <header className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-title">Fake Ithaka</Link>
      <nav className="navbar-nav">
        <Link to="/">Inicio</Link>
        <Link to="/#uso">Uso</Link>
        <Link to="/faq">Preguntas Frecuentes</Link>
      </nav>
    </div>
  </header>
); 