// "use client";
// import { useState } from "react";
// import { useCopilotKit } from "@copilotkit/react-core";

// export default function SimpleChat() {
//     const [message, setMessage] = useState("");
//     const [response, setResponse] = useState("");
//     const [loading, setLoading] = useState(false);
//     const { copilotKit } = useCopilotKit();

//     const sendMessage = async () => {
//         if (!message.trim()) return;

//         setLoading(true);
//         setResponse("");

//         try {
//             console.log("🔄 Enviando mensaje:", message);

//             const startTime = Date.now();

//             // Usar CopilotKit directamente
//             const result = await copilotKit.sendMessage({
//                 message: message,
//                 context: {
//                     conversationId: "test-conversation",
//                     userId: "test-user"
//                 }
//             });

//             const endTime = Date.now();
//             const responseTime = endTime - startTime;

//             console.log("✅ Mensaje enviado exitosamente");
//             setResponse(`✅ Respuesta en ${responseTime}ms:\n${result.content}`);

//         } catch (error) {
//             console.error("❌ Error enviando mensaje:", error);
//             setResponse(`❌ Error: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">Chat Simple</h3>

//             <div className="mb-4">
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                     placeholder="Escribe un mensaje..."
//                     className="w-full p-2 border border-gray-300 rounded"
//                     disabled={loading}
//                 />
//             </div>

//             <button
//                 onClick={sendMessage}
//                 disabled={loading || !message.trim()}
//                 className="w-full px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
//             >
//                 {loading ? "Enviando..." : "Enviar"}
//             </button>

//             {response && (
//                 <div className="mt-4 p-3 bg-gray-100 rounded">
//                     <pre className="whitespace-pre-wrap text-sm">{response}</pre>
//                 </div>
//             )}
//         </div>
//     );
// } 