"use client";

import { CopilotKitCSSProperties } from "@copilotkit/react-ui";
import ChatPopup from "./components/ChatPopup";

export default function CopilotKitPage() {
  const POPUP_THEME_COLOR = "deepskyblue";

  return (
    <>
      <main
        style={{ "--copilot-kit-primary-color": "#6366f1" } as CopilotKitCSSProperties}
      >
        <YourMainContent themeColor="#6366f1" />


      </main>

      <div
        style={{ "--copilot-kit-primary-color": POPUP_THEME_COLOR } as CopilotKitCSSProperties}
      >
        <ChatPopup />
      </div>
    </>
  );
}



function YourMainContent({ themeColor }: { themeColor: string }) {
  // Simple content without CoAgent to avoid conflicts

  return (
    <div
      style={{ backgroundColor: themeColor }}
      className="h-screen w-screen flex justify-center items-center flex-col transition-colors duration-300"
    >
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">ITHAKA Chatbot</h1>
        <p className="text-gray-200 text-center italic mb-6">Centro de emprendimiento e innovación de la UCU 🚀</p>
        <hr className="border-white/20 my-6" />
        <div className="text-center text-white/80">
          <p>Haz clic en el chat para preguntar sobre:</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>• Programa Fellows</li>
            <li>• Cursos electivos</li>
            <li>• Costos de servicios</li>
            <li>• Convocatorias</li>
          </ul>
        </div>
      </div>
    </div>
  );


}
