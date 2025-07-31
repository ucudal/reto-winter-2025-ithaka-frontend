// Weather card component where the location and themeColor are based on what the agent
// sets via tool calls.
import { WeatherCard } from '@/components/ui/WeatherCard';

export default function WeatherCardWrapper({ location, themeColor }: { location?: string, themeColor: string }) {
  return <WeatherCard location={location} themeColor={themeColor} />;
}