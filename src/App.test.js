import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('to do app', () => {
  test('Render elements on the page', () => {
    render(<App />);
    const header = screen.getByRole('heading', {name: 'List maker'});
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

  });
  test('Add and then delete a todo from the page', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Description...');
    const button = screen.getByRole('button', {name: 'Add'});

    const todoDescription = 'Hello, World!';
    userEvent.type(input, todoDescription);
    expect(button).not.toBeDisabled();

    userEvent.click(button);
    const todo = screen.queryByText(todoDescription);
    expect(todo).toBeInTheDocument();
    const removeButton = screen.getByLabelText('remove-btn');
    expect(removeButton).toBeInTheDocument();

    userEvent.click(removeButton);
    expect(todo).not.toBeInTheDocument();

  });
});
