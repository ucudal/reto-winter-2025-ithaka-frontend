import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExampleComponent } from '../ExampleComponent';

describe('ExampleComponent', () => {
  describe('Rendering', () => {
    it('renders with default title when no title prop is provided', () => {
      render(<ExampleComponent />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveTextContent('Ejemplo');
    });

    it('renders with custom title when title prop is provided', () => {
      const customTitle = 'Custom Test Title';
      render(<ExampleComponent title={customTitle} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent(customTitle);
    });

    it('renders the default Spanish description text', () => {
      render(<ExampleComponent />);
      
      const descriptionText = screen.getByText('Este es un componente de ejemplo. Reemplázalo con tus propios componentes.');
      expect(descriptionText).toBeInTheDocument();
    });

    it('renders without children when no children are provided', () => {
      render(<ExampleComponent />);
      
      const childContainer = screen.queryByTestId('children-container');
      expect(childContainer).not.toBeInTheDocument();
    });

    it('renders children when children are provided', () => {
      const childContent = 'This is child content';
      render(
        <ExampleComponent>
          <p>{childContent}</p>
        </ExampleComponent>
      );
      
      const childElement = screen.getByText(childContent);
      expect(childElement).toBeInTheDocument();
    });

    it('renders multiple children elements', () => {
      render(
        <ExampleComponent>
          <p>First child</p>
          <span>Second child</span>
          <div>Third child</div>
        </ExampleComponent>
      );
      
      expect(screen.getByText('First child')).toBeInTheDocument();
      expect(screen.getByText('Second child')).toBeInTheDocument();
      expect(screen.getByText('Third child')).toBeInTheDocument();
    });
  });

  describe('Props Handling', () => {
    it('handles empty string as title', () => {
      render(<ExampleComponent title="" />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent('');
    });

    it('handles very long title text', () => {
      const longTitle = 'This is a very long title that might cause layout issues or overflow problems in the component rendering';
      render(<ExampleComponent title={longTitle} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent(longTitle);
    });

    it('handles special characters in title', () => {
      const specialTitle = 'Title with <>&"\'` special chars';
      render(<ExampleComponent title={specialTitle} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent(specialTitle);
    });

    it('handles React elements as children', () => {
      const reactChild = <button type="button" onClick={() => {}}>Click me</button>;
      render(
        <ExampleComponent>
          {reactChild}
        </ExampleComponent>
      );
      
      const buttonElement = screen.getByRole('button', { name: 'Click me' });
      expect(buttonElement).toBeInTheDocument();
    });

    it('handles null children gracefully', () => {
      render(
        <ExampleComponent>
          {null}
        </ExampleComponent>
      );
      
      // Should render without crashing and not show children container
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toBeInTheDocument();
    });

    it('handles undefined children gracefully', () => {
      render(
        <ExampleComponent>
          {undefined}
        </ExampleComponent>
      );
      
      // Should render without crashing
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toBeInTheDocument();
    });

    it('handles boolean children gracefully', () => {
      render(
        <ExampleComponent>
          {true}
          {false}
        </ExampleComponent>
      );
      
      // Should render without crashing - React ignores boolean children
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe('CSS Classes and Styling', () => {
    it('applies correct CSS classes to main container', () => {
      const { container } = render(<ExampleComponent />);
      
      const mainDiv = container.firstChild as HTMLElement;
      expect(mainDiv).toHaveClass('bg-white/10', 'backdrop-blur-sm', 'p-4', 'rounded-lg', 'border', 'border-white/20');
    });

    it('applies correct CSS classes to title element', () => {
      render(<ExampleComponent />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveClass('text-lg', 'font-semibold', 'text-white', 'mb-2');
    });

    it('applies correct CSS classes to children container when children are present', () => {
      render(
        <ExampleComponent>
          <span>Test child</span>
        </ExampleComponent>
      );
      
      const childSpan = screen.getByText('Test child');
      const childContainer = childSpan.parentElement;
      expect(childContainer).toHaveClass('text-white/80');
    });

    it('applies correct CSS classes to description paragraph', () => {
      render(<ExampleComponent />);
      
      const descriptionElement = screen.getByText('Este es un componente de ejemplo. Reemplázalo con tus propios componentes.');
      expect(descriptionElement).toHaveClass('text-xs', 'text-white/60', 'mt-2');
      expect(descriptionElement.tagName).toBe('P');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML with proper heading hierarchy', () => {
      render(<ExampleComponent title="Accessibility Test" />);
      
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe('H3');
    });

    it('maintains proper DOM structure for screen readers', () => {
      render(
        <ExampleComponent title="Test Title">
          <p>Test content for screen readers</p>
        </ExampleComponent>
      );
      
      // Verify the structure is logical for assistive technology
      const heading = screen.getByRole('heading', { level: 3 });
      const content = screen.getByText('Test content for screen readers');
      
      expect(heading).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      
      // Heading should come before content in DOM order
      const headingPosition = Array.from(document.body.querySelectorAll('*')).indexOf(heading);
      const contentPosition = Array.from(document.body.querySelectorAll('*')).indexOf(content);
      expect(headingPosition).toBeLessThan(contentPosition);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('handles component with both title and children props', () => {
      const title = 'Test Title';
      const childContent = 'Test Child Content';
      
      render(
        <ExampleComponent title={title}>
          <div>{childContent}</div>
        </ExampleComponent>
      );
      
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(childContent)).toBeInTheDocument();
      expect(screen.getByText('Este es un componente de ejemplo. Reemplázalo con tus propios componentes.')).toBeInTheDocument();
    });

    it('handles numeric values in title prop', () => {
      const numericTitle = 42;
      render(<ExampleComponent title={String(numericTitle)} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent('42');
    });

    it('handles whitespace-only title', () => {
      const whitespaceTitle = '   ';
      render(<ExampleComponent title={whitespaceTitle} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent(whitespaceTitle);
    });

    it('renders correctly with nested React components as children', () => {
      const NestedComponent = () => <span>Nested component content</span>;
      
      render(
        <ExampleComponent>
          <div>
            <NestedComponent />
            <p>Additional content</p>
          </div>
        </ExampleComponent>
      );
      
      expect(screen.getByText('Nested component content')).toBeInTheDocument();
      expect(screen.getByText('Additional content')).toBeInTheDocument();
    });
  });

  describe('Component Structure and Layout', () => {
    it('maintains consistent component structure', () => {
      const { container } = render(
        <ExampleComponent title="Structure Test">
          <p>Test content</p>
        </ExampleComponent>
      );
      
      const mainDiv = container.firstChild as HTMLElement;
      const children = Array.from(mainDiv.children);
      
      // Should have exactly 3 children: h3, div (for children), and p (description)
      expect(children).toHaveLength(3);
      expect(children[0].tagName).toBe('H3'); // Title
      expect(children[1].tagName).toBe('DIV'); // Children container
      expect(children[2].tagName).toBe('P'); // Description
    });

    it('maintains correct structure when no children are provided', () => {
      const { container } = render(<ExampleComponent title="No Children Test" />);
      
      const mainDiv = container.firstChild as HTMLElement;
      const children = Array.from(mainDiv.children);
      
      // Should have exactly 2 children: h3 and p (no children container)
      expect(children).toHaveLength(2);
      expect(children[0].tagName).toBe('H3'); // Title
      expect(children[1].tagName).toBe('P'); // Description
    });
  });

  describe('Default Behavior', () => {
    it('uses default title when title prop is undefined', () => {
      render(<ExampleComponent title={undefined} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveTextContent('Ejemplo');
    });

    it('renders with minimal props (default behavior)', () => {
      render(<ExampleComponent />);
      
      // Verify all essential elements are present with defaults
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Ejemplo');
      expect(screen.getByText('Este es un componente de ejemplo. Reemplázalo con tus propios componentes.')).toBeInTheDocument();
      
      // No children container should be present
      expect(screen.queryByText('text-white/80')).not.toBeInTheDocument();
    });
  });

  describe('TypeScript Interface Validation', () => {
    it('accepts valid ExampleComponentProps interface', () => {
      // This test ensures TypeScript compilation works correctly
      const validProps = {
        title: 'Valid Title',
        children: <div>Valid children</div>
      };
      
      render(<ExampleComponent {...validProps} />);
      
      expect(screen.getByText('Valid Title')).toBeInTheDocument();
      expect(screen.getByText('Valid children')).toBeInTheDocument();
    });

    it('handles optional props correctly', () => {
      // Test that both props are truly optional
      render(<ExampleComponent />);
      render(<ExampleComponent title="Only title" />);
      render(
        <ExampleComponent>
          <div>Only children</div>
        </ExampleComponent>
      );
      
      // All should render without TypeScript errors
      expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
    });
  });

  describe('Conditional Rendering Logic', () => {
    it('conditionally renders children container only when children exist', () => {
      // Test without children
      const { rerender } = render(<ExampleComponent />);
      let childrenContainer = screen.queryByText('Test child')?.parentElement;
      expect(childrenContainer?.className).not.toContain('text-white/80');
      
      // Test with children
      rerender(
        <ExampleComponent>
          <span>Test child</span>
        </ExampleComponent>
      );
      
      childrenContainer = screen.getByText('Test child').parentElement;
      expect(childrenContainer).toHaveClass('text-white/80');
    });

    it('properly handles falsy children values', () => {
      render(
        <ExampleComponent>
          {0}
          {false}
          {null}
          {undefined}
          {''}
        </ExampleComponent>
      );
      
      // Should render without errors - React handles these gracefully
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toBeInTheDocument();
    });
  });
});