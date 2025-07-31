# WeatherCardWrapper Tests

## Testing Framework

This test suite uses **Jest** with **React Testing Library** for comprehensive unit testing of the WeatherCardWrapper component.

## Test Coverage

- ✅ Basic rendering and props passing
- ✅ Location prop variations (including international locations)
- ✅ Theme color prop variations (hex, rgb, hsl, named colors)
- ✅ Component behavior and structure
- ✅ Re-rendering and props changes
- ✅ Agent integration scenarios
- ✅ Error handling and edge cases
- ✅ Performance considerations
- ✅ TypeScript interface compliance

## Running Tests

To run these tests, you'll need to install the required dependencies:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

Add to your `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/src/app/components/__tests__/setup.js"],
    "moduleNameMapping": {
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
}

## Component Under Test

The WeatherCardWrapper is a simple wrapper component that:

- Accepts optional `location` and required `themeColor` props
- Passes these props directly to the underlying WeatherCard component
- Is designed for agent-controlled updates in weather applications

## Test Philosophy

These tests follow the principle of comprehensive coverage with a bias for action:

- Tests cover all prop combinations and edge cases
- Includes international locations and various color formats
- Simulates agent-controlled scenarios for real-world usage
- Validates TypeScript interface compliance
- Tests performance under rapid updates
- Ensures proper error handling and graceful degradation.