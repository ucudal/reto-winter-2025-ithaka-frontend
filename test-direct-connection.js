#!/usr/bin/env node

const fetch = require('node-fetch');

async function testDirectConnection() {
  console.log('🧪 Probando conexión directa al backend...');
  
  const testCases = [
    {
      message: "¿Qué es el programa Fellows?",
      description: "Pregunta FAQ directa"
    },
    {
      message: "Hola, ¿cómo estás?",
      description: "Saludo general"
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n📝 Probando: ${testCase.description}`);
    console.log(`Pregunta: ${testCase.message}`);
    
    try {
      const startTime = Date.now();
      
      const response = await fetch('http://localhost:8000/api/v1/copilotkit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: testCase.message,
          conversation_id: null,
          user_email: null,
          properties: {}
        }),
      });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Respuesta exitosa en ${responseTime}ms:`);
        console.log(`   Agente: ${data.agent_used}`);
        console.log(`   Respuesta: ${data.response.substring(0, 100)}...`);
      } else {
        const errorText = await response.text();
        console.log(`❌ Error ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.log(`❌ Error de conexión: ${error.message}`);
    }
  }
}

testDirectConnection().catch(console.error); 