import React, { Suspense } from 'react';
import { Navbar } from '../components/Navbar';
import { SectionIntro } from '../components/SectionIntro';
import { SectionUse } from '../components/SectionUse';
import { SectionContact } from '../components/SectionContact';
import { Footer } from '../components/Footer';

const ChatPopup = React.lazy(() =>
  import('entrepreneur-ai-assistant').then((m) => ({ default: m.ChatPopup }))
);

const HomePage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <SectionIntro />
        <SectionUse />
        <SectionContact />
      </main>
      <Footer />
      {process.env.NEXT_PUBLIC_COPILOT_KEY && (
        <Suspense fallback={<></>}>
          <ChatPopup publicApiKey={process.env.NEXT_PUBLIC_COPILOT_KEY!} />
        </Suspense>
      )}
    </div>
  );
};

export default HomePage;



