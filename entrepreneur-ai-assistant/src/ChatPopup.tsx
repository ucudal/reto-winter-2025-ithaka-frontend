import { CopilotKit } from '@copilotkit/react-core';
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import '@copilotkit/react-ui/styles.css';
import { useFaqReferenceAction } from "./hooks/useFaqReferenceAction";
import { useRouter } from "next/navigation";


interface ChatPopupProps {
  apiUrl?: string;
  themeColor?: string;
  title?: string;
  initialMessage?: string;
  pageName?: string;
}

export default function ChatPopup({
  apiUrl = undefined,
  themeColor = "deepskyblue",
  title = "Asistente de ITHAKA",
  initialMessage = "Hola soy el asistente de ITHAKA, ¿en qué puedo ayudarte hoy?",
}: ChatPopupProps) {
  return (
    <CopilotKit
      runtimeUrl={apiUrl}
    >
      <ChatUIWrapper
        themeColor={themeColor}
        title={title}
        initialMessage={initialMessage}
      />
    </CopilotKit>
  );
}

function ChatUIWrapper({
  themeColor,
  title,
  initialMessage,
}: {
  themeColor: string;
  title: string;
  initialMessage: string;
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
        labels={{
          title: title,
          initial: initialMessage,
        }}
      />
    </div>
  );
}
