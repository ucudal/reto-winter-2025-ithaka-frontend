"use client";

import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import { useEffect, useState } from "react";



import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";




export default function ChatPopup() {
  const POPUP_THEME_COLOR = "deepskyblue";




const [error, setError] = useState<string | null>(null);

const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Optional: readable to show connection status or loading state
  const status = useCopilotReadable(
    {
      description: "Estado de conexión del asistente.",
      value: errorMessage ? "error" : "ok",
    },
    [errorMessage]
  );

  useCopilotAction({
    name: "handleError",
    description: "Envía un mensaje de error al usuario si algo falla",
    parameters: [
      { name: "error", type: "string", description: "Mensaje de error" },
    ],
    handler: async ({ error }) => {
      setErrorMessage(error);
    },
  });

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
        {errorMessage && (
          <div className="p-2 text-sm text-red-600 bg-red-100 rounded mt-2">
            ⚠️ {errorMessage}
          </div>
        )}
    </div>
  );
}
