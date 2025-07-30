"use client";

import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";

export default function ChatPopup() {
  const POPUP_THEME_COLOR = "deepskyblue";

  return (
    <div
      style={{ "--copilot-kit-primary-color": POPUP_THEME_COLOR } as CopilotKitCSSProperties}
    >
      <CopilotPopup
        labels={{
          title: "ITHAKA Copilot",
          initial: "Hola soy el asistente de ITHAKA, ¿en qué puedo ayudarte?",
          placeholder: "Escribe tu mensaje aquí...",
        }}
      />
    </div>
  );
}
