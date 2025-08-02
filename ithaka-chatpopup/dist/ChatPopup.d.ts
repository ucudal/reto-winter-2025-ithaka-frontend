export interface ChatPopupProps {
    defaultOpen?: boolean;
    title?: string;
    initialMessage?: string;
    placeholder?: string;
    instructions?: string;
    className?: string;
}
export default function ChatPopup({ defaultOpen, title, initialMessage, placeholder, instructions, className }: ChatPopupProps): import("react/jsx-runtime").JSX.Element;
