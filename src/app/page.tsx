"use client";

import { useState } from "react";

export default function HomePage() {
  const [themeColor, setThemeColor] = useState("#6366f1");

  return (
    <main style={{ backgroundColor: themeColor }} className="h-screen w-screen flex justify-center items-center flex-col transition-colors duration-300">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">Ithaka UI Components</h1>
        <p className="text-gray-200 text-center italic mb-6">
          Proyecto base para componentes reutilizables 🎨
        </p>
        
        {/* Ejemplo de uso de componentes */}
        <div className="bg-white/15 p-6 rounded-xl text-white mb-6">
          <h2 className="text-xl font-semibold mb-4">Cómo usar componentes:</h2>
          <div className="space-y-2 text-sm">
            <p>1. Crea componentes en <code className="bg-white/20 px-2 py-1 rounded">src/components/ui/</code></p>
            <p>2. Exporta en <code className="bg-white/20 px-2 py-1 rounded">src/components/ui/index.ts</code></p>
            <p>3. Construye con <code className="bg-white/20 px-2 py-1 rounded">npm run pack</code></p>
            <p>4. Instala en otros proyectos</p>
          </div>
        </div>

        {/* Ejemplo de importación */}
        <div className="bg-white/15 p-6 rounded-xl text-white">
          <h2 className="text-xl font-semibold mb-4">Ejemplo de importación:</h2>
          <pre className="bg-black/30 p-4 rounded text-sm overflow-x-auto">
{`import { MyComponent } from "ithaka-ui-components";

function App() {
  return <MyComponent />;
}`}
          </pre>
        </div>

        {/* Botón de ejemplo */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setThemeColor(`hsl(${Math.random() * 360}, 70%, 60%)`)}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Cambiar Color
          </button>
        </div>
      </div>
    </main>
  );
}
