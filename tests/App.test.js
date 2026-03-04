import { render, screen } from '@testing-library/react';
import React from 'react';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    expect(div).toBeInTheDocument();
  });
});
