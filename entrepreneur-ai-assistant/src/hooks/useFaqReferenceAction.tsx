// entrepreneur-ai-assistant/src/hooks/useFaqReferenceAction.ts
import { useCopilotAction } from "@copilotkit/react-core";
import { faqData } from "../constants/faqData";

export function useFaqReferenceAction(pageName: string) {
  return useCopilotAction({
    name: "referenceFaq",
    description:"Usa esta herramienta siempre que el usuario haga una pregunta que pueda estar relacionada con las preguntas frecuentes (FAQ) de ITHAKA. No intentes responder por tu cuenta: esta herramienta se encargará de redirigir o responder. Siempre llama a esta función para resolver esas preguntas.",

    parameters: [
      {
        name: "question",
        type: "string",
        description: "Pregunta a responder usando el contenido de FAQ",
        required: true,
      },
    ],
    handler: async ({ question }) => {

      // Si no estamos en la página de FAQ, redirigir
      if (pageName !== "FAQPage") {
        if (typeof window !== "undefined") {
          window.location.href = "/faq";
        }
        return "Redirigiendo a la página de preguntas frecuentes...";
      }

      const match = faqData.find((item) =>
        question.toLowerCase().includes(item.question.toLowerCase().slice(0, 20))
      );

      if (match) {
        return `Pregunta frecuente encontrada:\n\n**${match.question}**\n${match.answer}`;
      } else {
        return "No encontré una respuesta directa en las preguntas frecuentes.";
      }
    },
  });
}
