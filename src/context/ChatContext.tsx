'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type State = {
  messages: Message[];
  input: string;
};

// Action types
type Action =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'CLEAR_MESSAGES' };

// Reducer
const chatReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, { 
          ...action.payload, 
          id: action.payload.id || crypto.randomUUID() 
        }], 
        
      };
    case 'SET_INPUT':
      return {
        ...state,
        input: action.payload,
      };
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};

// Context
const ChatStateContext = createContext<State | undefined>(undefined);
const ChatDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

// Provider
export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(chatReducer, {
    messages: [],
    input: '',
  });

  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

// Hooks
export const useChatState = () => {
  const context = useContext(ChatStateContext);
  if (context === undefined) {
    throw new Error('useChatState must be used within a ChatProvider');
  }
  return context;
};

export const useChatDispatch = () => {
  const context = useContext(ChatDispatchContext);
  if (context === undefined) {
    throw new Error('useChatDispatch must be used within a ChatProvider');
  }
  return context;
};
