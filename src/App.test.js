import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('to do app', () => {
  test('renders page elemets', () => {
    render(<App />);
    const header = screen.getByRole('heading', {name: 'Todo app'});
    expect(header).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Description...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    const button = screen.getByRole('button', {name: 'Add'});
    expect(button).toBeInTheDocument();
  });
});
