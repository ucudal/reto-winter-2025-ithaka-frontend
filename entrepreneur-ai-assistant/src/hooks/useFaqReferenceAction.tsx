import { useCopilotAction } from "@copilotkit/react-core";
import { faqData } from "../constants/faqData";

type UseFaqReferenceActionProps = {
  onRedirect?: () => void;
};

export const useFaqReferenceAction = ({ onRedirect }: UseFaqReferenceActionProps) => {
  useCopilotAction({
    name: "navigateToFaqIfRelevant",
    description: "Redirige al usuario a la página de FAQs si su pregunta coincide.",
    parameters: [
      {
        name: "question",
        type: "string",
        description: "La pregunta que el usuario hizo",
        required: true,
      },
    ],
    handler: async ({ question }: { question: string }) => {
      const matched = faqData.find((q) =>
        question.toLowerCase().includes(q.question.toLowerCase())
      );

      if (matched && onRedirect) {
        onRedirect();
        return `Te redirijo a la página de preguntas frecuentes para más información sobre: "${matched.question}"`;
      }

      return "No encontré una pregunta frecuente relacionada.";
    },
  });
};
