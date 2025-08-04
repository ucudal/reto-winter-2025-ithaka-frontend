"use client";
import { useState } from "react";

export default function ChatTest() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testBackendConnection = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const payload = {
        message: message,
        conversation_id: null,
        user_email: null,
        properties: {}
      };

      const startTime = Date.now();
      
      const res = await fetch("/api/copilotkit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      if (res.ok) {
        const data = await res.json();
        setResponse(`✅ Respuesta exitosa en ${responseTime}ms\nAgente: ${data.agent_used}\nRespuesta: ${data.response}`);
      } else {
        const errorText = await res.text();
        setError(`❌ Error ${res.status}: ${errorText}`);
      }
    } catch (err) {
      setError(`❌ Error de conexión: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Test de Conexión Backend</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Mensaje de prueba:
        </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje para probar..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={testBackendConnection}
          disabled={loading || !message}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          {loading ? "Probando..." : "Probar Conexión"}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <pre className="whitespace-pre-wrap">{error}</pre>
        </div>
      )}

      {response && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          <pre className="whitespace-pre-wrap">{response}</pre>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Casos de prueba sugeridos:</h3>
        <div className="space-y-2">
          <button
            onClick={() => setMessage("¿Qué es el programa Fellows?")}
            className="block text-left p-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            ¿Qué es el programa Fellows?
          </button>
          <button
            onClick={() => setMessage("¿Cuánto cuestan los cursos?")}
            className="block text-left p-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            ¿Cuánto cuestan los cursos?
          </button>
          <button
            onClick={() => setMessage("Hola, ¿cómo estás?")}
            className="block text-left p-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            Hola, ¿cómo estás?
          </button>
        </div>
      </div>
    </div>
  );
} 