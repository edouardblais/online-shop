import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer'
import Cart from '../Cart';

describe('Cart component', () => {
    it('renders correctly', () => {
        const cart = TestRenderer
            .create(
                <MemoryRouter>
                    <Cart />)
                </MemoryRouter>
            )
            .toJSON();
        expect(cart).toMatchSnapshot();
    })

    it('renders cart elements', () => {
        const cart = [
            {name:'The Moon',
             image: 'moonimage',
             price: 90000000,
             count: 0,
            },
            {name:'Callisto',
             image: 'callistoimage',
             price: 20000000,
             count: 0,
            },]
        
        render(<Cart cart={cart}/>, {wrapper: MemoryRouter});

        const moon = screen.queryByText('The Moon');
        expect(moon).toBeInTheDocument();
        
        const callisto = screen.queryByText('Callisto');
        expect(callisto).toBeInTheDocument();

        const io = screen.queryByText('Io');
        expect(io).not.toBeInTheDocument();

        const phobos = screen.queryByText('Phobos');
        expect(phobos).not.toBeInTheDocument();
    })
})
