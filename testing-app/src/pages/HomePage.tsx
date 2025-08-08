import React from 'react';
import { Navbar } from '../components/Navbar';
import { SectionIntro } from '../components/SectionIntro';
import { SectionUse } from '../components/SectionUse';
import { SectionContact } from '../components/SectionContact';
import { Footer } from '../components/Footer';


export const HomePage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <SectionIntro />
        <SectionUse />
        <SectionContact />
      </main>
      <Footer />
      
    </div>
  );
};

export default HomePage; 