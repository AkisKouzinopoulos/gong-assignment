import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('renders the header text', () => {
    render(<Header />);
    expect(screen.getByText(/users hierarchy/i)).toBeInTheDocument();
  });
});
