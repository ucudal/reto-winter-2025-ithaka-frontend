# ITHAKA ChatPopup

Un componente de chat popup personalizado con la identidad visual de ITHAKA y integración con CopilotKit.

## 🚀 Instalación

```bash
npm install ithaka-chatpopup
```

## 📦 Dependencias Requeridas

```json
{
  "@copilotkit/react-core": "^1.9.0",
  "@copilotkit/react-ui": "^1.9.0",
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

## 🎯 Uso Básico

```tsx
import { ChatPopup } from 'ithaka-chatpopup';
import 'ithaka-chatpopup/styles.css';

function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <ChatPopup />
    </div>
  );
}
```

## ⚙️ Configuración

Asegúrate de tener configurado CopilotKit en tu `layout.tsx` o `App.tsx`:

```tsx
import { CopilotKit } from "@copilotkit/react-core";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CopilotKit publicApiKey="tu-api-key">
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
```

## 🎨 Personalización

```tsx
import { ChatPopup } from 'ithaka-chatpopup';

function App() {
  return (
    <ChatPopup
      defaultOpen={false}
      title="Mi Asistente Personalizado"
      initialMessage="¡Hola! ¿En qué puedo ayudarte?"
      placeholder="Escribe tu mensaje..."
      instructions="Eres un asistente personalizado..."
    />
  );
}
```

## 🎨 Paleta de Colores ITHAKA

- **Azul Principal**: `#1A365D`
- **Naranja de Acento**: `#F58220`
- **Azul/Cian Secundario**: `#66B2B2`

## 📋 Props Disponibles

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `defaultOpen` | `boolean` | `true` | Si el popup debe abrirse automáticamente |
| `title` | `string` | `'Centro ITHAKA - UCU'` | Título del popup |
| `initialMessage` | `string` | Mensaje inicial de ITHAKA | Mensaje inicial del asistente |
| `placeholder` | `string` | `'Escribe tu consulta sobre ITHAKA...'` | Placeholder del input |
| `instructions` | `string` | Instrucciones de ITHAKA | Instrucciones para el asistente |
| `className` | `string` | `'ithaka-popup-custom'` | Clase CSS personalizada |

## 🏗️ Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Construir
npm run build

# Limpiar
npm run clean
```

## 📄 Licencia

MIT 