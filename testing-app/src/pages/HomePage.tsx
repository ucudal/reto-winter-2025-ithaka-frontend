import React from 'react';
import { Navbar } from '../components/Navbar';
import { SectionIntro } from '../components/SectionIntro';
import { SectionUso } from '../components/SectionUso';
import { SectionContact } from '../components/SectionContact';
import { Footer } from '../components/Footer';
import  ActiveLink from '../hooks/ChangeRouter';


export const HomePage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <button onClick={() => {<ActiveLink href="/faq">FAQ</ActiveLink>
        }}>FAQ</button>
        <SectionIntro />
        <SectionUso />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
}; 

