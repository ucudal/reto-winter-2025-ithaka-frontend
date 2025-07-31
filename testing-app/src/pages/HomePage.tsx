import React from 'react';
import { Navbar } from '../components/Navbar';
import { SectionIntro } from '../components/SectionIntro';
import { SectionUso } from '../components/SectionUso';
import { SectionContact } from '../components/SectionContact';
import { Footer } from '../components/Footer';



export const HomePage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <SectionIntro />
        <SectionUso />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 

