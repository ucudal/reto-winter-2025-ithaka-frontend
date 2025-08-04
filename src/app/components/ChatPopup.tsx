"use client";
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";

export default function ChatPopup() {
  const POPUP_THEME_COLOR = "deepskyblue";
  return (
    <div
      style={{ "--copilot-kit-primary-color": POPUP_THEME_COLOR } as CopilotKitCSSProperties}
    >
      <CopilotPopup
        defaultOpen
        instructions="Eres el asistente de ITHAKA, el centro de emprendimiento e innovación de la Universidad Católica del Uruguay. Ayuda a los usuarios con información sobre nuestros programas, cursos, becas y servicios. Responde preguntas sobre el programa Fellows, cursos electivos, costos, convocatorias y cualquier otra consulta relacionada con ITHAKA."
        labels={{
          title: 'Asistente de ITHAKA',
          initial: '¡Hola! Soy el asistente de ITHAKA, el centro de emprendimiento e innovación de la UCU. ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre nuestros programas, cursos, becas y servicios.',
        }}
      />
    </div>
  );
}
