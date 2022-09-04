import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders header', () => {
	render(<App />);
	const linkElement = screen.getByText(/App/i);
	expect(linkElement).toBeInTheDocument();
});