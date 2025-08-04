// "use client";
// import { useState } from "react";
// import { useCopilotKit } from "@copilotkit/react-core";

// export default function CopilotKitTest() {
//     const [message, setMessage] = useState("");
//     const [response, setResponse] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const { copilotKit } = useCopilotKit();

//     const testCopilotKit = async () => {
//         setLoading(true);
//         setError("");
//         setResponse("");

//         try {
//             console.log("🔄 Iniciando test de CopilotKit...");

//             const startTime = Date.now();

//             // Simular el uso de CopilotKit
//             const result = await copilotKit.callAction({
//                 name: "test_action",
//                 arguments: {
//                     message: message
//                 }
//             });

//             const endTime = Date.now();
//             const responseTime = endTime - startTime;

//             console.log("✅ CopilotKit test completado");
//             setResponse(`✅ Test completado en ${responseTime}ms\nResultado: ${JSON.stringify(result, null, 2)}`);

//         } catch (err) {
//             console.error("❌ Error en CopilotKit test:", err);
//             setError(`❌ Error: ${err}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const testDirectAPI = async () => {
//         setLoading(true);
//         setError("");
//         setResponse("");

//         try {
//             console.log("🔄 Iniciando test directo de API...");

//             const startTime = Date.now();

//             const res = await fetch("/api/copilotkit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     message: message,
//                     conversation_id: null,
//                     user_email: null,
//                     properties: {}
//                 }),
//             });

//             const endTime = Date.now();
//             const responseTime = endTime - startTime;

//             if (res.ok) {
//                 const data = await res.json();
//                 console.log("✅ API test completado");
//                 setResponse(`✅ API test completado en ${responseTime}ms\nAgente: ${data.agent_used}\nRespuesta: ${data.response}`);
//             } else {
//                 const errorText = await res.text();
//                 console.error("❌ Error en API test:", errorText);
//                 setError(`❌ Error ${res.status}: ${errorText}`);
//             }
//         } catch (err) {
//             console.error("❌ Error de conexión:", err);
//             setError(`❌ Error de conexión: ${err}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Test de CopilotKit</h2>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2">
//                     Mensaje de prueba:
//                 </label>
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Escribe un mensaje para probar..."
//                     className="w-full p-2 border border-gray-300 rounded"
//                 />
//             </div>

//             <div className="mb-4 space-x-2">
//                 <button
//                     onClick={testDirectAPI}
//                     disabled={loading || !message}
//                     className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
//                 >
//                     {loading ? "Probando..." : "Test API Directa"}
//                 </button>

//                 <button
//                     onClick={testCopilotKit}
//                     disabled={loading || !message}
//                     className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
//                 >
//                     {loading ? "Probando..." : "Test CopilotKit"}
//                 </button>
//             </div>

//             {error && (
//                 <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//                     <pre className="whitespace-pre-wrap">{error}</pre>
//                 </div>
//             )}

//             {response && (
//                 <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
//                     <pre className="whitespace-pre-wrap">{response}</pre>
//                 </div>
//             )}

//             <div className="mt-6">
//                 <h3 className="text-lg font-semibold mb-2">Casos de prueba:</h3>
//                 <div className="space-y-2">
//                     <button
//                         onClick={() => setMessage("¿Qué es el programa Fellows?")}
//                         className="block text-left p-2 bg-gray-100 rounded hover:bg-gray-200"
//                     >
//                         ¿Qué es el programa Fellows?
//                     </button>
//                     <button
//                         onClick={() => setMessage("¿Cuánto cuestan los cursos?")}
//                         className="block text-left p-2 bg-gray-100 rounded hover:bg-gray-200"
//                     >
//                         ¿Cuánto cuestan los cursos?
//                     </button>
//                     <button
//                         onClick={() => setMessage("Hola, ¿cómo estás?")}
//                         className="block text-left p-2 bg-gray-100 rounded hover:bg-gray-200"
//                     >
//                         Hola, ¿cómo estás?
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// } 