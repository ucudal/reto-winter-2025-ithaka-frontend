'use client';

import { CopilotPopup } from '@copilotkit/react-ui';
import { CopilotTextarea } from '@copilotkit/react-textarea';

export default function CopilotChat() {
  return (
    <CopilotPopup
      defaultOpen
      instructions="Ayuda al usuario con su solicitud."
      labels={{
        title: 'Asistente',
        initial: '¿En qué puedo ayudarte hoy?',
      }}
    >
      <CopilotTextarea
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Escribe tu mensaje..."
        style={{ width: '100%' }}
        autosuggestionsConfig={{
          textareaPurpose: "Escribe tu mensaje aquí.",
          chatApiConfigs: {
            suggestionsApiConfig: {
              maxTokens: 50,
              stop: ["\n", ".", "?", "!"],
            },
          },
        }}
      />
    </CopilotPopup>
  );
}
