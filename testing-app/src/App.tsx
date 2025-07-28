import React from 'react';
import { Navbar } from './components/Navbar';
import { SectionIntro } from './components/SectionIntro';
import { SectionUso } from './components/SectionUso';
import { SectionProps } from './components/SectionProps';
import { SectionCasos } from './components/SectionCasos';
import { Footer } from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <SectionIntro />
        <SectionUso />
        <SectionProps />
        <SectionCasos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
