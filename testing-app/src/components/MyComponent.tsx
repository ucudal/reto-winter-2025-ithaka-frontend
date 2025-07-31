import React from 'react'

interface MyComponentProps {
   text: string;
 }

export const MyComponent: React.FC<MyComponentProps> = ({ text }) => (
  <div className="mi-componente">
    <p className="mi-componente-text">{text}</p>
  </div>
); 
