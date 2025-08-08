'use client'; // ⚠️ Necesario para usar hooks en componentes en Next.js App Router

import React from 'react';
import Link from 'next/link';
//port { usePathname } from 'next/navigation'; // 👈 Importar el hook correcto

//port { ChatPopup } from 'entrepreneur-ai-assistant';

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
