import React from 'react';

/**
 * Props for the ExampleComponent.
 * 
 * @property {string} [title] - The title to display in the component. Defaults to "Example".
 * @property {React.ReactNode} [children] - Optional child elements to render inside the component.
 */
interface ExampleComponentProps {
  title?: string;
  children?: React.ReactNode;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({ 
  title = "Example", 
  children 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {children && (
        <div className="text-white/80">
          {children}
        </div>
      )}
      <p className="text-xs text-white/60 mt-2">
        Este es un componente de ejemplo. Reemplázalo con tus propios componentes.
      </p>
    </div>
  );
}; 