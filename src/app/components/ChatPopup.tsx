"use client";

import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import { useEffect, useState } from "react";

export default function ChatPopup() {
  const POPUP_THEME_COLOR = "deepskyblue";
  const [error, setError] = useState<string | null>(null);

  // Simulamos chequeo de conectividad al backend (opcional, puedes quitar esto)
  useEffect(() => {
    fetch("/api/copilotkit")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al conectar con el asistente.");
        }
      })
      .catch((err) => {
        console.error("Error al conectar:", err);
        setError("No se pudo conectar con el asistente. Intenta más tarde.");
      });
  }, []);

  return (
    <div
      style={
        {
          "--copilot-kit-primary-color": POPUP_THEME_COLOR,
        } as CopilotKitCSSProperties
      }
    >
      
        <CopilotPopup
          defaultOpen
          instructions="Ayuda al usuario con su solicitud."
          labels={{
            title: "Asistente de ITHAKA",
            initial:
              "Hola, soy el asistente de ITHAKA. ¿En qué puedo ayudarte hoy?",
          }}
          
          
        />
    </div>
  );
}
