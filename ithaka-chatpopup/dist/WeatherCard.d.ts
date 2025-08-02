export interface WeatherCardProps {
    city?: string;
    temperature?: number;
    description?: string;
    className?: string;
}
export default function WeatherCard({ city, temperature, description, className }: WeatherCardProps): import("react/jsx-runtime").JSX.Element;
