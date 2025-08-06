import React from 'react';
import { Navbar } from '../components/Navbar';
import { SectionIntro } from '../components/SectionIntro';
import { SectionUse } from '../components/SectionUse';
import { SectionContact } from '../components/SectionContact';
import { Footer } from '../components/Footer';
// import { ChatPopup } from 'entrepreneur-ai-assistant'; // TODO: Comentado porque la dependencia está rota y no está declarada en package.json

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
      {/* 
        TODO: Este componente fue comentado porque depende de un paquete (entrepreneur-ai-assistant)
        que no está instalado ni disponible. Si se desea usar en el futuro, reinstalar el paquete correctamente
        y configurar la variable NEXT_PUBLIC_COPILOT_KEY en el entorno.
        
        <ChatPopup publicApiKey={process.env.NEXT_PUBLIC_COPILOT_KEY || ""}/> 
      */}
    </div>
  );
};

export default HomePage;


