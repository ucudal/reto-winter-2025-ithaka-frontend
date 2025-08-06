import { useReducer, useEffect } from "react";
import { IthakaForm } from "../interfaces/IthakaFormInterface";
import { initialFormState } from "../IthakaForm";

// Estado del chat
interface ChatFormState {
  form: IthakaForm;
  isTyping: boolean;
  isSubmitting: boolean;
  error: string | null;
  messageHistory: string[];
}

// Acciones del reducer
type ChatFormAction =
  | { type: 'SET_FIELD'; field: keyof IthakaForm; value: any }
  | { type: 'SET_TYPING'; payload: boolean }
  | { type: 'SET_SUBMITTING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_MESSAGE'; payload: string }
  | { type: 'CLEAR_FORM' }
  | { type: 'RESET_FORM' };

// Estado inicial
const initialChatState: ChatFormState = {
  form: initialFormState,
  isTyping: false,
  isSubmitting: false,
  error: null,
  messageHistory: []
};

// Reducer
function chatFormReducer(state: ChatFormState, action: ChatFormAction): ChatFormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, form: { ...state.form, [action.field]: action.value }, isTyping: true };
    case 'SET_TYPING':
      return { ...state, isTyping: action.payload };
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_MESSAGE':
      return { ...state, messageHistory: [...state.messageHistory, action.payload] };
    case 'CLEAR_FORM':
      return { ...state, form: initialFormState };
    case 'RESET_FORM':
      return initialChatState;
    default:
      throw Error('Unknown action: ' + (action as any).type);
  }
}

export function useChatForm() {
  const [state, dispatch] = useReducer(chatFormReducer, initialChatState);

  // Debug: cada vez que cambia el estado
  useEffect(() => {
    console.log("📌 Estado actualizado", state);
  }, [state]);

  return { state, dispatch };
}
