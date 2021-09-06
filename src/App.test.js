import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    expect(button).toBeDisabled();

    const todoDescription = 'Hello, World!';
    userEvent.type(input, todoDescription);
    expect(button).not.toBeDisabled();

    userEvent.click(button);
    const todo = screen.getByText(todoDescription);
    expect(todo).toBeInTheDocument();
    
    // const removeButton = screen.getByLabelText('remove-btn');
    // const removeButton = screen.getByText( { 'aria-remove': 2 }));
    // expect(removeButton).toBeInTheDocument();
  });
});
