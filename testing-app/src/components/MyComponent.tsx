import React from 'react';

interface MyComponent {
  text: string;
}

export const MyComponent: React.FC<MyComponent> = ({ text }) => (
  <div className="mi-componente">
    <p className="mi-componente-text">{text}</p>
  </div>
); 