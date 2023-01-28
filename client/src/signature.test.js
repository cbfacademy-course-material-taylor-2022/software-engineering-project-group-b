import react from 'react';
import { render } from '@testing-library/react';
import Signature from './Signature';

describe('Signature', () => {
    // xit('renders expected elements', () => {
    //     const signature = render(<Signature />);
    //     expect(document.querySelectorAll('img')).toHaveLength(1);
    // });


    it('renders expected elements', () => {
        const signature = render(<Signature />);
        expect(document.querySelectorAll('h3')).toHaveLength(1);
    
    });

});

