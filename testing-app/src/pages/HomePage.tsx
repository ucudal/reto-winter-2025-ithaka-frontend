import React from 'react';
import { Navbar } from '../components/Navbar';
import { SectionIntro } from '../components/SectionIntro';
import { SectionUse } from '../components/SectionUse';
import { SectionContact } from '../components/SectionContact';
import { Footer } from '../components/Footer';
import { ChatPopup } from 'entrepreneur-ai-assistant';

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
      <ChatPopup publicApiKey={process.env.NEXT_PUBLIC_COPILOT_KEY || ""} />
    </div>
  );
};

export default HomePage;


