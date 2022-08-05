import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer'
import Cart from '../Cart';

describe('Cart component', () => {
    it('renders correctly', () => {
        const numberWithSepMock = jest.fn();
        const cart = TestRenderer
            .create(
                <MemoryRouter>
                    <Cart numberWithSep={numberWithSepMock}/>)
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
        
        const numberWithSepMock = jest.fn();
        
        render(<Cart cart={cartmock} numberWithSep={numberWithSepMock}/>, {wrapper: MemoryRouter});

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
