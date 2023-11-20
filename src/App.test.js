import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
<<<<<<< HEAD

  const h1Element = screen.getByRole('heading', { level: 1, name: "Marvel App" });
  expect(h1Element).toBeInTheDocument();
=======
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> 1f124a4514f449bdbb94bcc8f9e7ca35f6538712
});
