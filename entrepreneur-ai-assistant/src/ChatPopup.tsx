import { CopilotKit } from '@copilotkit/react-core';
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import '@copilotkit/react-ui/styles.css';

interface ChatPopupProps {
  publicApiKey?: string;
  apiUrl?: string;
  themeColor?: string;
  title?: string;
  initialMessage?: string;
  instructions?: string;
}

export default function ChatPopup({
  apiUrl = undefined,
  publicApiKey = "sk-mock-key-for-development-only",
  themeColor = "deepskyblue",
  title = "Asistente de ITHAKA",
  initialMessage = "Hola soy el asistente de ITHAKA, ¿en qué puedo ayudarte hoy?",
  instructions = "Ayuda al usuario con su solicitud."
}: ChatPopupProps) {

  return (
    <CopilotKit
      publicApiKey={!apiUrl ? publicApiKey : undefined}
      runtimeUrl={apiUrl}
    >
      <div
        style={{ "--copilot-kit-primary-color": themeColor } as CopilotKitCSSProperties}
      >
        <CopilotPopup
          defaultOpen
          instructions={instructions}
          labels={{
            title: title,
            initial: initialMessage,
          }}
        >
        </CopilotPopup>
      </div>
    </CopilotKit>
  );
}
