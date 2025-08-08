import { CopilotKit } from '@copilotkit/react-core';
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import '@copilotkit/react-ui/styles.css';

import { useEffect } from "react";
import { useFaqReferenceAction } from "./hooks/useFaqReferenceAction";

import { useRouter } from "next/navigation";


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
  instructions="Si el usuario hace una pregunta que coincide con alguna pregunta frecuente, redirígelo automáticamente a la página de preguntas frecuentes sin responder directamente. No intentes responder por tu cuenta: esta herramienta se encargará de redirigir o responder. Siempre llama a esta función para resolver esas preguntas.",
  pageName = "unknown",
}: ChatPopupProps) {

  useEffect(() => {
    console.log(`[ChatPopup] Página actual: ${pageName}`);
  }, [pageName]);

  return (
    <CopilotKit
      runtimeUrl={apiUrl}
      publicApiKey={undefined}
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
  const router = useRouter();

  useFaqReferenceAction({
    onRedirect: () => {
      router.push("/faq");
    }
  });
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
