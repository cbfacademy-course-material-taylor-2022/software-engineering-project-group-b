import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders expected elements', () => {
        const navbar = mount(<Navbar/>);
        var image = navbar.find('img');
    expect(image).toBeInTheDocument();
    // expect(container.firstChild).toBeDefined();
    
    });

 });