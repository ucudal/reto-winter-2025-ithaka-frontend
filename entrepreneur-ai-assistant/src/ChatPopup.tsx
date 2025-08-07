import { CopilotKit } from '@copilotkit/react-core';
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import '@copilotkit/react-ui/styles.css';

import { useEffect } from "react";
import { useFaqReferenceAction } from "./hooks/useFaqReferenceAction";

interface ChatPopupProps {
  publicApiKey?: string;
  apiUrl?: string;
  themeColor?: string;
  title?: string;
  initialMessage?: string;
  instructions?: string;
  pageName?: string;
}

export default function ChatPopup({
  apiUrl = undefined,
  publicApiKey = "sk-mock-key-for-development-only",
  themeColor = "deepskyblue",
  title = "Asistente de ITHAKA",
  initialMessage = "Hola soy el asistente de ITHAKA, ¿en qué puedo ayudarte hoy?",
  instructions = "Ayuda al usuario con su solicitud.",
  pageName = "unknown",
}: ChatPopupProps) {

  useEffect(() => {
    console.log(`[ChatPopup] Página actual: ${pageName}`);
  }, [pageName]);

  return (
    <CopilotKit
      publicApiKey={!apiUrl ? publicApiKey : undefined}
      runtimeUrl={apiUrl}
    >
      <ChatUIWrapper
        themeColor={themeColor}
        title={title}
        initialMessage={initialMessage}
        instructions={instructions}
        pageName={pageName}
      />
    </CopilotKit>
  );
}

// ✅ Wrapper para asegurar que el hook tenga acceso al contexto de CopilotKit
function ChatUIWrapper(
  
  {
  themeColor,
  title,
  initialMessage,
  instructions,
  pageName,
}: {
  themeColor: string;
  title: string;
  initialMessage: string;
  instructions: string;
  pageName: string;
}) {
  useFaqReferenceAction(pageName); // ✅ Hook llamado dentro del contexto

  return (
    <div style={{ "--copilot-kit-primary-color": themeColor } as CopilotKitCSSProperties}>
      <CopilotPopup
        defaultOpen
        instructions={instructions}
        labels={{
          title: title,
          initial: initialMessage,
        }}
      />
    </div>
  );
}
