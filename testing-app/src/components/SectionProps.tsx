import React from 'react';

export const SectionProps = () => (
  <section className="section section-white">
    <div className="section-container">
      <h2 className="section-title">Props del Componente</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Tipo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>texto</td>
              <td>string</td>
              <td>El texto que se mostrará dentro del componente.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
); 