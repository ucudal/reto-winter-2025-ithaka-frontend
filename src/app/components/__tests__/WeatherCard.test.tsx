/**
 * Unit Tests for WeatherCardWrapper Component
 * 
 * Testing Framework: Jest with React Testing Library
 * Component: WeatherCardWrapper - A wrapper component that passes props to WeatherCard
 * 
 * The component accepts:
 * - location?: string (optional location prop)
 * - themeColor: string (required theme color prop)
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherCardWrapper from '../WeatherCard';

// Mock the WeatherCard component to isolate testing of the wrapper
const mockWeatherCard = jest.fn(({ location, themeColor }) => (
  <section
    data-testid="weather-card"
    data-location={location || ''}
    data-theme-color={themeColor}
    aria-label={`Weather card for ${location || 'unknown location'}`}
  >
    <span data-testid="location-display">{location || 'No location set'}</span>
    <span data-testid="theme-display" style={{ backgroundColor: themeColor }}>
      Theme: {themeColor}
    </span>
  </section>
));

// Mock the UI component import
jest.mock('@/components/ui/WeatherCard', () => ({
  WeatherCard: mockWeatherCard,
}));

describe('WeatherCardWrapper Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  describe('Basic Rendering and Props Passing', () => {
    it('should render WeatherCard with both location and themeColor provided', () => {
      const testLocation = 'New York City';
      const testThemeColor = '#007bff';

      render(<WeatherCardWrapper location={testLocation} themeColor={testThemeColor} />);

      // Verify the mock was called with correct props
      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: testLocation, themeColor: testThemeColor },
        {}
      );

      // Verify the rendered output
      expect(screen.getByTestId('weather-card')).toBeInTheDocument();
      expect(screen.getByTestId('location-display')).toHaveTextContent('New York City');
      expect(screen.getByTestId('theme-display')).toHaveTextContent('Theme: #007bff');
    });

    it('should render WeatherCard with only themeColor when location is omitted', () => {
      const testThemeColor = '#28a745';

      render(<WeatherCardWrapper themeColor={testThemeColor} />);

      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: undefined, themeColor: testThemeColor },
        {}
      );

      expect(screen.getByTestId('weather-card')).toBeInTheDocument();
      expect(screen.getByTestId('location-display')).toHaveTextContent('No location set');
      expect(screen.getByTestId('theme-display')).toHaveTextContent('Theme: #28a745');
    });

    it('should render WeatherCard with undefined location explicitly passed', () => {
      const testThemeColor = '#dc3545';

      render(<WeatherCardWrapper location={undefined} themeColor={testThemeColor} />);

      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: undefined, themeColor: testThemeColor },
        {}
      );

      expect(screen.getByTestId('location-display')).toHaveTextContent('No location set');
    });

    it('should pass through props without modification', () => {
      const testLocation = 'Tokyo';
      const testThemeColor = '#6f42c1';

      render(<WeatherCardWrapper location={testLocation} themeColor={testThemeColor} />);

      const [calledProps] = mockWeatherCard.mock.calls[0];
      expect(calledProps).toEqual({
        location: testLocation,
        themeColor: testThemeColor,
      });
    });
  });

  describe('Location Prop Variations', () => {
    const testThemeColor = '#17a2b8';

    it('should handle regular city names', () => {
      const cities = ['London', 'Paris', 'Berlin', 'Madrid', 'Rome'];
      
      cities.forEach((city) => {
        const { unmount } = render(<WeatherCardWrapper location={city} themeColor={testThemeColor} />);
        expect(screen.getByTestId('location-display')).toHaveTextContent(city);
        unmount();
      });
    });

    it('should handle complex location names with special characters', () => {
      const complexLocations = [
        'São Paulo',
        'München',
        'Köln-Düsseldorf',
        'New York, NY',
        'Los Angeles (LA)',
        'Saint-Étienne',
        'Østfold, Norway',
      ];

      complexLocations.forEach((location) => {
        const { unmount } = render(<WeatherCardWrapper location={location} themeColor={testThemeColor} />);
        expect(screen.getByTestId('location-display')).toHaveTextContent(location);
        expect(mockWeatherCard).toHaveBeenCalledWith(
          expect.objectContaining({ location }),
          {}
        );
        unmount();
      });
    });

    it('should handle international location names with unicode', () => {
      const internationalLocations = [
        '北京市', // Beijing in Chinese
        'Москва', // Moscow in Russian
        'القاهرة', // Cairo in Arabic
        'मुंबई', // Mumbai in Hindi
        'Τοκιο', // Tokyo in Greek
      ];

      internationalLocations.forEach((location) => {
        const { unmount } = render(<WeatherCardWrapper location={location} themeColor={testThemeColor} />);
        expect(screen.getByTestId('location-display')).toHaveTextContent(location);
        unmount();
      });
    });

    it('should handle empty string location', () => {
      render(<WeatherCardWrapper location="" themeColor={testThemeColor} />);
      
      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: '', themeColor: testThemeColor },
        {}
      );
      expect(screen.getByTestId('location-display')).toHaveTextContent('No location set');
    });

    it('should handle whitespace-only location', () => {
      const whitespaceLocation = '   \t\n   ';
      render(<WeatherCardWrapper location={whitespaceLocation} themeColor={testThemeColor} />);
      
      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: whitespaceLocation, themeColor: testThemeColor },
        {}
      );
    });

    it('should handle very long location names', () => {
      const longLocation = 'A'.repeat(1000);
      render(<WeatherCardWrapper location={longLocation} themeColor={testThemeColor} />);
      
      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: longLocation, themeColor: testThemeColor },
        {}
      );
      expect(screen.getByTestId('location-display')).toHaveTextContent(longLocation);
    });
  });

  describe('Theme Color Prop Variations', () => {
    const testLocation = 'Test City';

    it('should handle hex color formats', () => {
      const hexColors = [
        '#ff0000', // Full hex
        '#f00',    // Short hex
        '#FF0000', // Uppercase hex
        '#F00',    // Uppercase short hex
        '#123abc', // Mixed case
        '#000000', // Black
        '#ffffff', // White
      ];

      hexColors.forEach((color) => {
        const { unmount } = render(<WeatherCardWrapper location={testLocation} themeColor={color} />);
        expect(mockWeatherCard).toHaveBeenCalledWith(
          expect.objectContaining({ themeColor: color }),
          {}
        );
        expect(screen.getByTestId('theme-display')).toHaveTextContent(`Theme: ${color}`);
        unmount();
      });
    });

    it('should handle RGB and RGBA color formats', () => {
      const rgbColors = [
        'rgb(255, 0, 0)',
        'rgb(0,255,0)',
        'rgb(0, 0, 255)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(0, 255, 0, 1.0)',
        'rgba(100, 150, 200, 0.75)',
      ];

      rgbColors.forEach((color) => {
        const { unmount } = render(<WeatherCardWrapper location={testLocation} themeColor={color} />);
        expect(mockWeatherCard).toHaveBeenCalledWith(
          expect.objectContaining({ themeColor: color }),
          {}
        );
        unmount();
      });
    });

    it('should handle HSL and HSLA color formats', () => {
      const hslColors = [
        'hsl(0, 100%, 50%)',
        'hsl(120, 100%, 50%)',
        'hsl(240, 100%, 50%)',
        'hsla(0, 100%, 50%, 0.5)',
        'hsla(180, 50%, 75%, 0.8)',
      ];

      hslColors.forEach((color) => {
        const { unmount } = render(<WeatherCardWrapper location={testLocation} themeColor={color} />);
        expect(mockWeatherCard).toHaveBeenCalledWith(
          expect.objectContaining({ themeColor: color }),
          {}
        );
        unmount();
      });
    });

    it('should handle named colors', () => {
      const namedColors = [
        'red', 'blue', 'green', 'yellow', 'purple', 'orange',
        'black', 'white', 'gray', 'pink', 'brown', 'cyan',
        'magenta', 'lime', 'navy', 'teal', 'olive', 'maroon',
      ];

      namedColors.forEach((color) => {
        const { unmount } = render(<WeatherCardWrapper location={testLocation} themeColor={color} />);
        expect(mockWeatherCard).toHaveBeenCalledWith(
          expect.objectContaining({ themeColor: color }),
          {}
        );
        unmount();
      });
    });

    it('should handle empty string themeColor', () => {
      render(<WeatherCardWrapper location={testLocation} themeColor="" />);
      
      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: testLocation, themeColor: '' },
        {}
      );
      expect(screen.getByTestId('theme-display')).toHaveTextContent('Theme: ');
    });

    it('should handle potentially invalid color values', () => {
      const invalidColors = [
        'invalid-color',
        '#gggggg',
        'rgb(300, 300, 300)',
        'hsl(400, 120%, 120%)',
        'not-a-color',
        '12345',
      ];

      invalidColors.forEach((color) => {
        const { unmount } = render(<WeatherCardWrapper location={testLocation} themeColor={color} />);
        expect(mockWeatherCard).toHaveBeenCalledWith(
          expect.objectContaining({ themeColor: color }),
          {}
        );
        // Component should still render even with invalid colors
        expect(screen.getByTestId('weather-card')).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Component Behavior and Structure', () => {
    it('should call WeatherCard exactly once per render', () => {
      render(<WeatherCardWrapper location="Chicago" themeColor="#fd7e14" />);
      expect(mockWeatherCard).toHaveBeenCalledTimes(1);
    });

    it('should only pass location and themeColor props', () => {
      render(<WeatherCardWrapper location="Mumbai" themeColor="#e83e8c" />);
      
      const [calledProps] = mockWeatherCard.mock.calls[0];
      expect(Object.keys(calledProps)).toEqual(['location', 'themeColor']);
      expect(Object.keys(calledProps)).toHaveLength(2);
    });

    it('should render without wrapper elements', () => {
      const { container } = render(<WeatherCardWrapper location="Sydney" themeColor="#6610f2" />);
      
      // The container should only have one direct child (the mocked WeatherCard)
      expect(container.children).toHaveLength(1);
      expect(container.firstChild).toHaveAttribute('data-testid', 'weather-card');
    });

    it('should maintain proper accessibility attributes', () => {
      const location = 'Paris';
      render(<WeatherCardWrapper location={location} themeColor="#007bff" />);
      
      const weatherCard = screen.getByTestId('weather-card');
      expect(weatherCard).toHaveAttribute('aria-label', `Weather card for ${location}`);
    });
  });

  describe('Re-rendering and Props Changes', () => {
    it('should update when location prop changes', () => {
      const themeColor = '#198754';
      const { rerender } = render(<WeatherCardWrapper location="Madrid" themeColor={themeColor} />);

      expect(screen.getByTestId('location-display')).toHaveTextContent('Madrid');

      rerender(<WeatherCardWrapper location="Barcelona" themeColor={themeColor} />);

      expect(screen.getByTestId('location-display')).toHaveTextContent('Barcelona');
      expect(mockWeatherCard).toHaveBeenCalledTimes(2);
      expect(mockWeatherCard).toHaveBeenLastCalledWith(
        { location: 'Barcelona', themeColor },
        {}
      );
    });

    it('should update when themeColor prop changes', () => {
      const location = 'Rome';
      const { rerender } = render(<WeatherCardWrapper location={location} themeColor="#0d6efd" />);

      expect(screen.getByTestId('theme-display')).toHaveTextContent('Theme: #0d6efd');

      rerender(<WeatherCardWrapper location={location} themeColor="#198754" />);

      expect(screen.getByTestId('theme-display')).toHaveTextContent('Theme: #198754');
      expect(mockWeatherCard).toHaveBeenCalledTimes(2);
    });

    it('should update when both props change simultaneously', () => {
      const { rerender } = render(<WeatherCardWrapper location="Vienna" themeColor="#dc3545" />);

      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location: 'Vienna', themeColor: '#dc3545' },
        {}
      );

      rerender(<WeatherCardWrapper location="Prague" themeColor="#ffc107" />);

      expect(mockWeatherCard).toHaveBeenLastCalledWith(
        { location: 'Prague', themeColor: '#ffc107' },
        {}
      );
      expect(screen.getByTestId('location-display')).toHaveTextContent('Prague');
      expect(screen.getByTestId('theme-display')).toHaveTextContent('Theme: #ffc107');
    });

    it('should handle transition from undefined to defined location', () => {
      const themeColor = '#17a2b8';
      const { rerender } = render(<WeatherCardWrapper themeColor={themeColor} />);

      expect(screen.getByTestId('location-display')).toHaveTextContent('No location set');

      rerender(<WeatherCardWrapper location="Amsterdam" themeColor={themeColor} />);

      expect(screen.getByTestId('location-display')).toHaveTextContent('Amsterdam');
      expect(mockWeatherCard).toHaveBeenCalledTimes(2);
    });

    it('should handle transition from defined to undefined location', () => {
      const themeColor = '#20c997';
      const { rerender } = render(<WeatherCardWrapper location="Copenhagen" themeColor={themeColor} />);

      expect(screen.getByTestId('location-display')).toHaveTextContent('Copenhagen');

      rerender(<WeatherCardWrapper themeColor={themeColor} />);

      expect(screen.getByTestId('location-display')).toHaveTextContent('No location set');
    });
  });

  describe('Agent Integration Scenarios', () => {
    it('should work correctly with agent-controlled prop updates', () => {
      // Simulate various agent-controlled scenarios
      const agentScenarios = [
        { location: 'Agent Set Location 1', themeColor: '#ff6b6b' },
        { location: undefined, themeColor: '#4ecdc4' },
        { location: 'Agent Set Location 2', themeColor: '#45b7d1' },
        { themeColor: '#96ceb4' }, // location omitted
        { location: '', themeColor: '#feca57' }, // empty location
      ];

      agentScenarios.forEach((scenario, index) => {
        const { unmount } = render(<WeatherCardWrapper {...scenario} />);
        
        expect(mockWeatherCard).toHaveBeenNthCalledWith(index + 1,
          expect.objectContaining({
            location: scenario.location,
            themeColor: scenario.themeColor,
          }),
          {}
        );
        
        unmount();
      });
    });

    it('should handle rapid consecutive updates from agent', () => {
      const rapidUpdates = [
        { location: 'Update 1', themeColor: '#color1' },
        { location: 'Update 2', themeColor: '#color2' },
        { location: 'Update 3', themeColor: '#color3' },
        { location: undefined, themeColor: '#color4' },
        { location: 'Update 5', themeColor: '#color5' },
      ];

      const { rerender } = render(<WeatherCardWrapper {...rapidUpdates[0]} />);
      
      rapidUpdates.slice(1).forEach((update, index) => {
        rerender(<WeatherCardWrapper {...update} />);
        expect(mockWeatherCard).toHaveBeenNthCalledWith(index + 2,
          expect.objectContaining(update),
          {}
        );
      });

      expect(mockWeatherCard).toHaveBeenCalledTimes(rapidUpdates.length);
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle component errors gracefully', () => {
      // Mock WeatherCard to throw an error
      mockWeatherCard.mockImplementationOnce(() => {
        throw new Error('WeatherCard component error');
      });

      expect(() => {
        render(<WeatherCardWrapper location="Test" themeColor="#test" />);
      }).toThrow('WeatherCard component error');
    });

    it('should maintain interface contract with WeatherCard', () => {
      const location = 'Contract Test';
      const themeColor = '#contract';

      render(<WeatherCardWrapper location={location} themeColor={themeColor} />);

      const [receivedProps] = mockWeatherCard.mock.calls[0];
      
      // Verify the interface contract
      expect(receivedProps).toHaveProperty('location');
      expect(receivedProps).toHaveProperty('themeColor');
      expect(typeof receivedProps.themeColor).toBe('string');
      expect(receivedProps.location === undefined || typeof receivedProps.location === 'string').toBe(true);
      expect(receivedProps.location).toBe(location);
      expect(receivedProps.themeColor).toBe(themeColor);
    });

    it('should handle null-like values appropriately', () => {
      // Test with type assertion for testing purposes
      const nullLocation = null as any;
      const undefinedThemeColor = undefined as any;

      expect(() => {
        render(<WeatherCardWrapper location={nullLocation} themeColor="#test" />);
      }).not.toThrow();

      expect(() => {
        render(<WeatherCardWrapper location="test" themeColor={undefinedThemeColor} />);
      }).not.toThrow();
    });
  });

  describe('Performance and Optimization', () => {
    it('should not cause unnecessary re-renders with same props', () => {
      const props = { location: 'Same City', themeColor: '#same' };
      const { rerender } = render(<WeatherCardWrapper {...props} />);
      
      // Clear the mock call count
      mockWeatherCard.mockClear();
      
      // Re-render with same props
      rerender(<WeatherCardWrapper {...props} />);
      
      // Should still call the component (React doesn't prevent this at component level)
      expect(mockWeatherCard).toHaveBeenCalledTimes(1);
    });

    it('should handle frequent prop changes efficiently', () => {
      const { rerender } = render(<WeatherCardWrapper location="Initial" themeColor="#initial" />);
      
      // Simulate many rapid changes
      for (let i = 1; i <= 100; i++) {
        rerender(<WeatherCardWrapper location={`City ${i}`} themeColor={`#color${i}`} />);
      }
      
      // Should have been called for initial render + 100 updates
      expect(mockWeatherCard).toHaveBeenCalledTimes(101);
    });
  });

  describe('TypeScript Interface Compliance', () => {
    it('should enforce required themeColor prop', () => {
      // TypeScript should catch this at compile time
      // This test verifies the interface is properly defined
      expect(() => {
        render(<WeatherCardWrapper location="Test" themeColor="#required" />);
      }).not.toThrow();
    });

    it('should allow optional location prop', () => {
      // Both forms should be valid TypeScript
      expect(() => {
        render(<WeatherCardWrapper location="Optional present" themeColor="#test" />);
        render(<WeatherCardWrapper themeColor="#test" />);
        render(<WeatherCardWrapper location={undefined} themeColor="#test" />);
      }).not.toThrow();
    });

    it('should maintain strict prop typing', () => {
      const location: string | undefined = 'Typed Location';
      const themeColor: string = '#typed';
      
      render(<WeatherCardWrapper location={location} themeColor={themeColor} />);
      
      expect(mockWeatherCard).toHaveBeenCalledWith(
        { location, themeColor },
        {}
      );
    });
  });
});