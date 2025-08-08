'use client';

import React from 'react';
import Link from 'next/link';

export const Navbar = () => {

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-title">Fake Ithaka</Link>
        <nav className="navbar-nav">
          <Link href="/">Inicio</Link>
          <Link href="/faq">Preguntas Frecuentes</Link>
        </nav>
      </div>
    </header>
  );
};
