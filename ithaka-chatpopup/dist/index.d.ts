import * as react_jsx_runtime from 'react/jsx-runtime';

interface ChatPopupProps {
    defaultOpen?: boolean;
    title?: string;
    initialMessage?: string;
    placeholder?: string;
    instructions?: string;
    className?: string;
}
declare function ChatPopup({ defaultOpen, title, initialMessage, placeholder, instructions, className }: ChatPopupProps): react_jsx_runtime.JSX.Element;

interface WeatherCardProps {
    city?: string;
    temperature?: number;
    description?: string;
    className?: string;
}
declare function WeatherCard({ city, temperature, description, className }: WeatherCardProps): react_jsx_runtime.JSX.Element;

export { ChatPopup, ChatPopupProps, WeatherCard, WeatherCardProps };
