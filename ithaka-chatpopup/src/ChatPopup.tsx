"use client";
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";

export interface ChatPopupProps {
  defaultOpen?: boolean;
  title?: string;
  initialMessage?: string;
  placeholder?: string;
  instructions?: string;
  className?: string;
}

export default function ChatPopup({
  defaultOpen = true,
  title = 'Centro ITHAKA - UCU',
  initialMessage = '¡Hola! Soy el asistente virtual del Centro ITHAKA de la Universidad Católica del Uruguay. 🎓\n\nPuedo ayudarte con:\n• **Programas Preuniversitarios**: Hackatones de innovación y becas\n• **Emprendedores**: Eventos y cultura de innovación\n• **Universitarios**: Cursos y formación en innovación\n• **Tu Idea**: Validación y puesta en marcha de emprendimientos\n\n¿En qué puedo ayudarte hoy?',
  placeholder = 'Escribe tu consulta sobre ITHAKA...',
  instructions = "Eres el asistente virtual del Centro ITHAKA de la Universidad Católica del Uruguay. Ayuda a los usuarios con información sobre programas de innovación, emprendimiento, hackatones, becas y eventos. Sé profesional, amigable y proporciona información precisa sobre los servicios de ITHAKA.",
  className = "ithaka-popup-custom"
}: ChatPopupProps) {
  // Colores de ITHAKA basados en la página web
  const ITHAKA_PRIMARY_COLOR = "#1A365D"; // Azul oscuro principal de UCU/ITHAKA
  const ITHAKA_SECONDARY_COLOR = "#F58220"; // Naranja de acento de UCU/ITHAKA
  const ITHAKA_ACCENT_COLOR = "#66B2B2"; // Azul/Cian de acento de UCU/ITHAKA
  
  return (
    <div
      style={{ 
        "--copilot-kit-primary-color": ITHAKA_PRIMARY_COLOR,
        "--copilot-kit-secondary-color": ITHAKA_SECONDARY_COLOR,
        "--copilot-kit-accent-color": ITHAKA_ACCENT_COLOR
      } as CopilotKitCSSProperties}
      className="ithaka-chat-popup"
    >
      <CopilotPopup
        defaultOpen={defaultOpen}
        instructions={instructions}
        labels={{
          title,
          initial: initialMessage,
          placeholder
        }}
        className={className}
      />
    </div>
  );
} 