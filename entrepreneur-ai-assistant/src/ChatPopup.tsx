import React from 'react';
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import '@copilotkit/react-ui/styles.css';
import { useChatForm } from './hooks/useChatForm';

interface ChatPopupProps {
  publicApiKey?: string;
  themeColor?: string;
  title?: string;
  initialMessage?: string;
  instructions?: string;
}

export default function ChatPopup({
  publicApiKey = "sk-mock-key-for-development-only",
  themeColor = "deepskyblue",
  title = "Asistente de ITHAKA",
  initialMessage = "Hola soy el asistente de ITHAKA, ¿en qué puedo ayudarte hoy?",
  instructions = "Ayuda al usuario con su solicitud."
}: ChatPopupProps) {
  
  const { state, dispatch } = useChatForm();

  return (
    <CopilotKit publicApiKey={publicApiKey}>
      <div style={{ "--copilot-kit-primary-color": themeColor } as CopilotKitCSSProperties}>
        <CopilotPopup
          defaultOpen
          instructions={instructions}
          labels={{
            title: title,
            initial: initialMessage,
          }}
        />

        {/* Debug - Comentado para no commitear */}
        {/*
        <div style={{ padding: '1rem', background: '#f5f5f5', marginTop: '1rem' }}>
          <h4>Datos actuales del formulario:</h4>
          <pre>{JSON.stringify(state.form, null, 2)}</pre>
        </div>
        */}
      </div>
    </CopilotKit>
  );
}
