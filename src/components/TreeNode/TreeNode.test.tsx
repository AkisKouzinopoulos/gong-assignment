import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TreeNodeAvatar } from './TreeNodeAvatar';
import { TreeNodeUserDetails } from './TreeNodeUserDetails';

const userWithPhoto = {
  id: 1,
  email: 'alice@example.com',
  firstName: 'Alice',
  lastName: 'Smith',
  photo: 'https://example.com/photo.jpg',
  children: [],
};

const userWithoutPhoto = {
  id: 2,
  email: 'bob@example.com',
  firstName: 'Bob',
  lastName: 'Jones',
  photo: '',
  children: [],
};

describe('TreeNodeUserDetails', () => {
  it('renders user full name', () => {
    render(<TreeNodeUserDetails user={userWithPhoto} />);
    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
  });

  it('renders user email', () => {
    render(<TreeNodeUserDetails user={userWithPhoto} />);
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
  });

  it('truncates long names and emails', () => {
    const longUser = {
      ...userWithPhoto,
      firstName: 'A'.repeat(50),
      lastName: 'B'.repeat(50),
      email: 'verylongemailaddress@example.com'.repeat(3),
    };
    render(<TreeNodeUserDetails user={longUser} />);
    expect(screen.getByText(`${longUser.firstName} ${longUser.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(longUser.email)).toBeInTheDocument();
  });
});

describe('TreeNodeAvatar', () => {
  it('renders user photo if available', () => {
    render(<TreeNodeAvatar user={userWithPhoto} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', userWithPhoto.photo);
    expect(img).toHaveAttribute('alt', userWithPhoto.firstName);
  });

  it('renders initials if photo is not available', () => {
    render(<TreeNodeAvatar user={userWithoutPhoto} />);
    expect(screen.getByText('BJ')).toBeInTheDocument();
  });
});
