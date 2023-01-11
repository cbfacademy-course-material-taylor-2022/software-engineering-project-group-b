import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders expected elements', () => {
        const { getByText } = render(< Navbar />);

    expect(linkElement).toBeInTheDocument();
    // expect(container.firstChild).toBeDefined();
    
    });

 });