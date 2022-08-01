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

    it('renders correct cart elements', () => {
        const cartmock = [
            {name:'The Moon',
             price: 90000000,
             count: 0,
            },
            {name:'Callisto',
             price: 20000000,
             count: 0,
            },]
        
        render(<Cart cart={cartmock}/>, {wrapper: MemoryRouter});

        const moon = screen.queryByText('The Moon');
        expect(moon).toBeInTheDocument();
        
        const callisto = screen.queryByText('Callisto');
        expect(callisto).toBeInTheDocument();

        const io = screen.queryByText('Io');
        expect(io).not.toBeInTheDocument();

        const phobos = screen.queryByText('Phobos');
        expect(phobos).not.toBeInTheDocument();
    })

    it('renders correct total price for each moon', () => {
        const cartmock = [
            {name:'The Moon',
             price: 9,
             count: 10,
            },
            {name:'Callisto',
             price: 2,
             count: 10,
            },]
        
        render(<Cart cart={cartmock}/>, {wrapper: MemoryRouter});

        const expectedtotalpriceforTheMoon = screen.queryByText('90$');
        expect(expectedtotalpriceforTheMoon).toBeInTheDocument();
        
        const expectedtotalpriceforCallisto = screen.queryByText('20$');
        expect(expectedtotalpriceforCallisto).toBeInTheDocument();
    })
})
