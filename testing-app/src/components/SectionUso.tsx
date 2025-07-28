import React from 'react';
import { MyComponent } from './MyComponent';

export const SectionUso = () => (
  <section className="section section-gray">
    <div className="section-container">
      <h2 className="section-title">Ejemplo de Uso</h2>
      <div className="card">
        <MyComponent text="Este es un ejemplo de cómo se ve el componente." />
      </div>
    </div>
  </section>
); 