import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn ', () => {
  render(<App />);
  const linkElement = screen.getByText(/sai/i);
  expect(linkElement).toBeInTheDocument();
});
