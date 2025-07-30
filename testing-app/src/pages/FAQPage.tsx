import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "¿Qué se necesita para postular una idea o emprendimiento?",
      answer: "Buscamos personas que tengan una idea o negocio innovador o con valor diferencial. Deben postular la idea a través de este link y alguien del equipo se contactará para tener una primera reunión."
    },
    {
      question: "¿Alguna actividad tiene costo?",
      answer: "No, todas nuestras actividades (incubadora, programas) son gratuitas y abiertas a todo público. Nuestras mentorías están abiertas a la comunidad universitaria UCU y los cursos electivos son gratuitos para estudiantes UCU siempre y cuando tengas créditos disponibles para cursar más electivas."
    },
    {
      question: "¿El Centro Ithaka es exclusivo para estudiantes y egresados UCU?",
      answer: "No, el Centro Ithaka forma parte del ecosistema emprendedor y atiende a la comunidad universitaria UCU en general (futuros estudiantes, estudiantes, egresados, profesores y funcionarios) así como a emprendedores interesados en las actividades que ofrecemos."
    },
    {
      question: "¿Qué ofrece el minor de emprendedurismo?",
      answer: "Este programa de un semestre ofrece la posibilidad de especializarte en creatividad, innovación y mentalidad emprendedora así como desarrollar la capacidad de detectar problemáticas y proponer soluciones, a través de la generación de modelos de negocios innovadores y sustentables."
    },
    {
      question: "¿Cómo me entero de las novedades y convocatorias del Centro?",
      answer: "A través de nuestras redes sociales: Instagram, Twitter y LinkedIn o a través de nuestro newsletter."
    }
  ];
  

  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="faq-page-section">
          <div className="container">
            <h1 className="faq-page-title">Preguntas Frecuentes</h1>
            <p className="faq-page-subtitle">
              Aquí encontrarás respuestas a las preguntas más comunes sobre la pagina de Ithaka.
            </p>
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                  </h3>
                  {openIndex === index && (
                    <p className="faq-answer">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};