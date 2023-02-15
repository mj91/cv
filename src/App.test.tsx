import { render, screen } from '@testing-library/react';
import {App} from './App';

test('renders my name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Marcin Jędrzejewski/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders my email address', () => {
  render(<App />);
  const linkElement = screen.getByText(/jedrzejewski\.marcin@gmail\.com/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders my phone number', () => {
  render(<App />);
  const linkElement = screen.getByText(/\+48[ ]?794[ ]?792[ ]?954/i);
  expect(linkElement).toBeInTheDocument();
});
