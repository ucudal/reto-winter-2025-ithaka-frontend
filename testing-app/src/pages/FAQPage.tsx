import React, { useState } from 'react';
import { AuthBar } from '../components/AuthBar';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "¿Para qué sirve el portal Uruguay Emprendedor?",
      answer: "El portal Uruguay Emprendedor te permitirá acceder a información, herramientas y recursos del mundo emprendedor en Uruguay. Si ya sos emprendedor, te ayudará a encontrar apoyos adecuados a la etapa de tu emprendimiento, además de  información sobre trámites, noticias, recursos, actividades y convocatorias interesantes."
    },
    {
      question: "¿Qué es el portal Uruguay Emprendedor?",
      answer: "El portal Uruguay Emprendedor es una plataforma de información y orientación para emprendedores, conformada por un portal web y una red física de puntos de atención distribuidos en todo el país."
    },
    {
      question: "¿Cómo me comunico con el portal?",
      answer: "Ingresá a la opción Contacto y envianos tu consulta. De esta forma, te comunicarás con los administradores del portal, quienes en breve responderemos tus consultas."
    },
    {
      question: "¿Qué información reúne el portal Uruguay Emprendedor?",
      answer: "El portal proporciona recursos en línea, herramientas e información sobre las distintas iniciativas y programas del mundo emprendedor, y facilita el vínculo entre las instituciones y los emprendedores."
    },
    {
      question: "¿Cómo puedo mantenerme informado de las novedades del portal?",
      answer: "Al final de la página de inicio o en la opción Contacto, encontrarás la opción para suscribirte a nuestra newsletter."
    },
    {
      question: "¿En dónde están los Puntos de Atención a Emprendedores?",
      answer: "Al final de la página web, encontrarás un mapa con la ubicación de los Puntos de Atención a Emprendedores (PAE) y podrás conocer cuál PAE te queda más cerca."
    },
    {
      question: "¿Cómo me comunico con las instituciones que integran el portal?",
      answer: "Accedé a la opción Instituciones y allí se desplegará un directorio ordenado alfabéticamente de todas las instituciones que integran el portal. Si hacés clic sobre cualquiera de ellas, podrás acceder a sus datos de contacto."
    },
    {
      question: "¿Cuáles son las Instituciones Patrocinadoras de Emprendimientos?",
      answer: "En la sección Recursos en línea, en la opción Otros, encontrarás un listado de las Instituciones Patrocinadoras de Emprendimientos (IPE), que poseen capacidades técnicas adecuadas para asesorar y acompañar a emprendimientos en su desarrollo."
    },
    {
      question: "¿En qué etapa se encuentra mi emprendimiento?",
      answer: "En la página de inicio del portal, encontrarás unas tarjetas giratorias: elegí la que dice «¡Identificá tu perfil emprendedor!» para realizar un autodiagnóstico y descubrir en qué etapa se encuentra tu emprendimiento."
    },
    {
      question: "¿Dónde están las herramientas y recursos para emprender?",
      answer: "En la sección Recursos en línea, podrás acceder a videos, artículos, libros y mucho más para saber qué es emprender e informarte sobre las características del ecosistema emprendedor. Además, en la Agenda de Actividades y en la Agenda de Convocatorias, podrás encontrar la información de todos los eventos, cursos, talleres y llamados disponibles para acercarte al mundo emprendedor."
    },
    {
      question: "¿Cómo me registro como emprendedor/usuario del portal?",
      answer: "Podés registrarte en el portal seleccionando el botón ¡Registrate! en el ángulo superior derecho de la página de inicio. Tenés que completar tus datos personales y una dirección de correo electrónico. Recibirás una notificación por correo electrónico para validar tu cuenta y, además, podrás completar más datos, obtener una cuenta Premium o Plus, registrar tu emprendimiento, y así acceder a distintos beneficios como usuario registrado."
    },
    {
      question: "¿Cuáles son los beneficios de registrarme como usuario del portal?",
      answer: "Los usuarios registrados pueden acceder a contenido exclusivo publicado en los Recursos en línea. Como usuario registrado podés comunicarte con las instituciones que integran el portal para consultarles sobre los programas de apoyos que ofrecen. Podés inscribirte a las actividades que incluyen inscripciones a través del portal.\n\nTambién podrás hacer tu autodiagnóstico y descubrir en qué etapa estás con tu emprendimiento. En la sección Networking, podrás difundir tu emprendimiento y proponer o aprovechar oportunidades laborales, comerciales o de asociación. Por último, podrás acceder a descuentos y beneficios exclusivos en productos y servicios para tu emprendimiento."
    },
    {
      question: "¿Cómo registro mi institución en el portal?",
      answer: "Si querés que tu institución forme parte del ecosistema emprendedor, comunicate con nosotros que con gusto te indicaremos cómo registrarte para que tus programas lleguen a más emprendedores."
    },
    {
      question: "¿Cómo hago mi autodiagnóstico?",
      answer: "Una vez que te registraste en el portal e iniciaste sesión, en la página de inicio debés seleccionar la tarjeta ¡Identificá tu perfil emprendedor! O desde tu perfil, en la opción Mi autodiagnóstico.\n\nTendrás que contestar algunas preguntas sobre tu emprendimiento y al final te orientaremos sobre qué tipo de emprendimiento tenés y en qué etapa del proceso emprendedor te encuentras, y así podrás ver los apoyos que se adecuan mejor con tu situación."
    },
    {
      question: "¿Cómo registro mi emprendimiento en el portal?",
      answer: "Una vez que te registraste e iniciaste sesión, si estás navegando por el portal, hacé clic en tu nombre en el ángulo superior derecho de cualquier página y elegí Mis emprendimientos, o desde tu perfil seleccioná Mis emprendimientos.\n\nEn esa sección podrás ver la lista de tus emprendimientos registrados, editarlos y gestionarlos. Si hacés clic en el botón verde Agregar nuevo, accederás a la ficha para completar la información de tu emprendimiento. Una vez completados los datos, podrás elegir la opción Guardar sin publicar, que te permitirá contar con la información del emprendimiento en tu perfil, pero no será pública; si querés, podés revisarla y publicarla más tarde.\n\nEn cambio, la opción Guardar y solicitar publicación te da la posibilidad de que tu emprendimiento sea publicado en la grilla de emprendimientos del portal. Al seleccionar esta opción, los administradores del portal comprobarán que los contenidos sean adecuados y luego los publicarán, y así quedará visible para todos los usuarios con cuenta Premium o Plus.\n\nAdemás, si tenés un socio, podrás vincularlo con tu emprendimiento y él también podrá gestionar esa información."
    },
    {
      question: "¿Cuáles son los beneficios de registrar mi emprendimiento en el portal?",
      answer: "Si registrás tu emprendimiento en Uruguay Emprendedor, ganarás mayor visibilidad para tu emprendimiento y podrás difundir oportunidades para obtener nuevos recursos que te ayuden a potenciarlo: desde socios, colaboradores, nuevos proveedores y vínculos que colaborarán para impulsar tu emprendimiento."
    },
    {
      question: "¿Qué son las oportunidades?",
      answer: "Como usuario, además de publicar información de tu emprendimiento, podrás ver las oportunidades publicadas por otros y así ampliar tus horizontes detectando posibles vínculos enriquecedores. Existen tres tipos de oportunidades:\n\n- Oportunidades de asociación: si estás buscando un socio para tu emprendimiento, publicá en esta sección el perfil que estás buscando y toda la información que creas necesaria para que los interesados puedan ponerse en contacto con vos.\n- Oportunidades de trabajo: en esta opción podés publicar el perfil que estás buscando para incorporar a tu equipo. Como usuario, acá podrás acceder a nuevas oportunidades de trabajo en un emprendimiento que te interese.\n- Oportunidades comerciales: en esta opción podés explorar sobre el tipo de producto o servicio que necesitás y sus características para que los posibles interesados puedan contactarte. Como proveedor, en este caso podrás aprovechar para contactarte con el emprendimiento para ofrecerle tus servicios o productos."
    },
    {
      question: "¿Cómo publico una oportunidad?",
      answer: "Toda oportunidad está asociada con un emprendimiento publicado, por lo tanto, para poder publicar una oportunidad, antes debés de haber publicado un emprendimiento.\n\nPara ingresar nuevas oportunidades, debés ir a Mis emprendimientos y seleccionar el botón Oportunidades del emprendimiento que corresponda. Allí debés elegir Agregar nueva en el tipo de oportunidad que te interesa agregar y completar los datos que te solicita para la publicación.\n\nUna vez cargada la información, debés elegir la opción Guardar y luego Volver para ir al resumen de oportunidades, donde podrás visualizar la oportunidad creada para editarla o borrarla."
    },
    {
      question: "¿Cómo me inscribo a una actividad a través del portal?",
      answer: "Si sos usuario registrado del portal, participá de la actividad que más te guste:\n\nAccedé en la Agenda de actividades al evento que te interesa seleccionando Más info. A la derecha de la información de la actividad, aparecerá una etiqueta negra que dice Inscripción, para participar de esta actividad inscribite aquí.\nTenés que estar registrado como usuario en el portal para poder inscribirte; si ya estás registrado, hacé clic sobre Inscribirme. Inmediatamente, verás un aviso en el recuadro a la derecha que dice «Ya te has inscrito a esta actividad. Ir a Mis inscripciones».\n\nAclaración: Si no aparece la etiqueta negra que dice Inscripción, para participar de esta actividad inscribite aquí, ¡no te preocupes! Tan solo no están habilitadas las inscripciones para esa actividad a través del portal Uruguay Emprendedor.\n\nLuego de realizar la inscripción, recibirás un mail de confirmación de la inscripción y en tu perfil ―a través de Mis inscripciones― podrás acceder a un resumen de todas las actividades a las que te registraste; allí podés consultar la información del evento o gestionar tu inscripción cuando quieras."
    },
    {
      question: "¿Qué son los descuentos y beneficios de Uruguay Emprendedor?",
      answer: "En la sección de Networking de Uruguay Emprendedor, encontrarás todos los descuentos y promociones exclusivos para los usuarios registrados en Uruguay Emprendedor."
    },
    {
      question: "¿Cómo descargo un descuento o beneficio?",
      answer: "Una vez que identificaste el descuento o beneficio al que querés acceder, hacé clic sobre Obtener cupón. Se desplegará el cupón con tus datos en una nueva pestaña, que podrás imprimir y descargar para presentar donde corresponda."
    }
  ];
  

  return (
    <div className="app">
      <AuthBar />
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