import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading correctly', () => {
  render(<App />);
  const mainHeading = screen.getByText(/your bills/i);
  expect(mainHeading).toBeInTheDocument();
});
