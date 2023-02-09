import react from 'react';
import { render } from '@testing-library/react';
import Signature from './Signature';
import { BrowserRouter } from 'react-router-dom';

describe('Signature', () => {
    // xit('renders expected elements', () => {
    //     const signature = render(<Signature />);
    //     expect(document.querySelectorAll('img')).toHaveLength(1);
    // });


    it('renders expected elements', () => {
        const signature = render(<BrowserRouter> <Signature /> </BrowserRouter>);
        // expect(shallow(
        //     <BrowserRouter>
        //       <Signature />
        //     </BrowserRouter>
        //   ).length).toEqual(1);
          
        expect(document.querySelectorAll('h2')).toHaveLength(2);
    
    });

});

