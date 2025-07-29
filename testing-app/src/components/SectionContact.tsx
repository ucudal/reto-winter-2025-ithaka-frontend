import React from 'react';

export const SectionContact = () => (
  <section id="contact" className="section section-white">
    <div className="section-container">
      <h2 className="section-title">Información de Contacto</h2>
      <div className="contact-card">
        <div className="contact-list">
          <div className="contact-item">
            <strong className="contact-label">Dirección:</strong>
            <span className="contact-value">Calle de los Desarrolladores Perdidos 1234, Edificio "El Bug Gigante"</span>
          </div>
          <div className="contact-item">
            <strong className="contact-label">Localidad:</strong>
            <span className="contact-value">Montevideo</span>
          </div>
          <div className="contact-item">
            <strong className="contact-label">Departamento:</strong>
            <span className="contact-value">Montevideo</span>
          </div>
          <div className="contact-item">
            <strong className="contact-label">Email:</strong>
            <span className="contact-value">FrontEnd@gmail.com</span>
          </div>
          <div className="contact-item">
            <strong className="contact-label">Teléfono:</strong>
            <span className="contact-value">2222 2222, int. 222</span>
          </div>
          <div className="contact-item">
            <strong className="contact-label">Responsables:</strong>
            <span className="contact-value">Varias personas</span>
          </div>
        </div>
      </div>
    </div>
  </section>
); 