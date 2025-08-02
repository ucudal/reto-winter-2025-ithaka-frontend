import React from 'react';

export interface WeatherCardProps {
  city?: string;
  temperature?: number;
  description?: string;
  className?: string;
}

export default function WeatherCard({
  city = "Montevideo",
  temperature = 22,
  description = "Soleado",
  className = "weather-card"
}: WeatherCardProps) {
  return (
    <div className={className} style={{
      background: 'linear-gradient(135deg, #1A365D 0%, #F58220 100%)',
      color: 'white',
      padding: '1rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{city}</h3>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
        {temperature}°C
      </div>
      <p style={{ margin: '0', opacity: 0.9 }}>{description}</p>
    </div>
  );
} 