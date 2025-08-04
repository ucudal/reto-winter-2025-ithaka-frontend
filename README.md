# reto-winter-2025-ithaka-frontend

Este proyecto contiene una librería de componentes React para crear asistentes de IA y una aplicación de testing para probar la integración.

## 📁 Estructura del Proyecto

```
reto-winter-2025-ithaka-frontend/
├── entrepreneur-ai-assistant/     # Librería de componentes
├── testing-app/                   # Aplicación de testing
├── src/                          # Código fuente principal
└── README.md                     # Este archivo
```

## 🚀 entrepreneur-ai-assistant

Una librería de componentes React que proporciona un asistente de IA conversacional usando CopilotKit. El componente principal es `ChatPopup` que se puede integrar fácilmente en cualquier aplicación Next.js.

### Características:
- ✅ Componente `ChatPopup` autónomo y configurable
- ✅ Integración con CopilotKit
- ✅ Estilos CSS incluidos
- ✅ TypeScript support
- ✅ Props personalizables (título, mensaje inicial, instrucciones, color del tema)

### Comandos para desarrollar la librería:

```bash
# Navegar al directorio de la librería
cd entrepreneur-ai-assistant

# Instalar dependencias
npm install

# Build de la librería (TypeScript + CSS)
npm run build

# Crear paquete .tgz para distribución
npm run pack
```

### Scripts disponibles:
- `npm run build:types` - Compilar TypeScript
- `npm run build:js` - Bundle con tsup
- `npm run build:css` - Copiar archivos CSS
- `npm run build` - Build completo
- `npm run pack` - Build + crear paquete .tgz

## 🧪 testing-app

Aplicación Next.js para probar la integración de la librería `entrepreneur-ai-assistant`. Incluye ejemplos de uso y demuestra cómo integrar el componente `ChatPopup`.

### Características:
- ✅ Página de ejemplo con el componente `ChatPopup`
- ✅ Configuración de CopilotKit
- ✅ Estructura de testing completa

### Comandos para la app de testing:

```bash
# Navegar al directorio de testing
cd testing-app

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## 🔄 Flujo de Trabajo Completo

### 1. Desarrollar la librería:

```bash
# En entrepreneur-ai-assistant/
npm run pack
```

Esto creará un archivo `entrepreneur-ai-assistant-0.1.0.tgz`

### 2. Instalar en la app de testing:

```bash
# En testing-app/
npm install ../entrepreneur-ai-assistant/entrepreneur-ai-assistant-0.1.0.tgz
```

### 3. Usar en la aplicación:

```tsx
import { ChatPopup } from 'entrepreneur-ai-assistant';

export default function MyPage() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <ChatPopup 
        publicApiKey="tu-api-key-aqui"
        title="Mi Asistente"
        initialMessage="¿En qué puedo ayudarte?"
      />
    </div>
  );
}
```

### 4. Ejecutar la aplicación:

```bash
# En testing-app/
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 🐳 Docker

Para construir y ejecutar con Docker:

```bash
# Build de la imagen
docker build -t reto-winter-2025-ithaka-front .

# Ejecutar el contenedor
docker run -p 3000:3000 reto-winter-2025-ithaka-front
```

## 📦 Configuración de CopilotKit

Para que el `ChatPopup` funcione correctamente, necesitas:

1. **API Key de CopilotKit**: Obtener una API key válida de [CopilotKit](https://copilotkit.ai/)
2. **Configuración en el componente**:

```tsx
<ChatPopup 
  publicApiKey="tu-api-key-real-aqui"
  themeColor="deepskyblue"
  title="Asistente de ITHAKA"
  initialMessage="Hola soy el asistente de ITHAKA, ¿en qué puedo ayudarte hoy?"
  instructions="Ayuda al usuario con su solicitud."
/>
```

## 🔧 Props del ChatPopup

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `publicApiKey` | string | "sk-mock-key-for-development-only" | API key de CopilotKit |
| `themeColor` | string | "deepskyblue" | Color del tema del chat |
| `title` | string | "Asistente de ITHAKA" | Título del chat |
| `initialMessage` | string | "Hola soy el asistente..." | Mensaje inicial |
| `instructions` | string | "Ayuda al usuario..." | Instrucciones para el AI |

## 🚨 Notas Importantes

- El archivo `.tgz` se versiona en Git para facilitar la distribución
- Los `package-lock.json` están ignorados para evitar conflictos
- La librería es autónoma e incluye todas sus dependencias como `peerDependencies`
- El componente `ChatPopup` incluye su propio wrapper de `CopilotKit`


