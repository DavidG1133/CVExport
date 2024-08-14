import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Index from '../../src/Views/Index';

// Ignorar warnings y errores
jest.spyOn(console, 'warn').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});

// Resetear módulos y mockear prop-types
jest.resetModules();
jest.mock('prop-Types', () => ({
  __esModule: true,
  checkPropTypes: () => {},
  isRequired: () => {},
  string: () => {},
}));

test('renders card-container', () => {
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );
  expect(screen.getElementsByClassName('card-container')[0]).toBeInTheDocument();
});

test('renders card-body', () => {
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );
  expect(screen.getElementsByClassName('card-body')[0]).toBeInTheDocument();
});

test('renders card-footer', () => {
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );
  expect(screen.getElementsByClassName('card-footer')[0]).toBeInTheDocument();
});
