# Ithaka UI Components - Proyecto Base

Este es un proyecto base para crear y exportar componentes de UI reutilizables.

## 🚀 Uso Rápido

### 1. Agregar Componentes

Crea tus componentes en `src/components/ui/`:

```typescript
// src/components/ui/MyComponent.tsx
import React from 'react';

export const MyComponent = () => {
  return <div>Mi Componente</div>;
};
```

### 2. Exportar Componentes

Agrega la exportación en `src/components/ui/index.ts`:

```typescript
// src/components/ui/index.ts
export { MyComponent } from './MyComponent';
export { AnotherComponent } from './AnotherComponent';
```

### 3. Construir y Empaquetar

```bash
# Construir la librería
npm run build:lib

# Crear el paquete .tgz
npm run pack
```

Esto crea: `ithaka-ui-components-0.1.0.tgz`

### 4. Instalar en Otros Proyectos

```bash
# En el proyecto donde quieres usar los componentes
npm install ./ithaka-ui-components-0.1.0.tgz
```

### 5. Usar los Componentes

```typescript
import { MyComponent, AnotherComponent } from "ithaka-ui-components";
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── index.ts          # Exporta todos los componentes
│   │   ├── MyComponent.tsx   # Tus componentes aquí
│   │   └── AnotherComponent.tsx
│   └── index.ts              # Re-exporta desde ui/
├── app/                      # Aplicación de ejemplo
└── ...
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build:lib` - Construir la librería
- `npm run pack` - Crear paquete .tgz
- `npm run build` - Construir la aplicación completa

## 📦 Configuración del Paquete

El `package.json` está configurado para:
- Exportar desde `dist/index.js` y `dist/ui/index.js`
- Incluir tipos TypeScript
- Funcionar con Next.js y React

## 🎯 Flujo de Trabajo

1. **Desarrollo**: Agrega componentes en `src/components/ui/`
2. **Exportación**: Actualiza `src/components/ui/index.ts`
3. **Construcción**: `npm run pack`
4. **Distribución**: Comparte el archivo `.tgz`
5. **Uso**: Instala en otros proyectos con `npm install ./archivo.tgz`
