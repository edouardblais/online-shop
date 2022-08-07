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

    it('renders correct cart elements and info', () => {
        const cartmock = [
            {name:'The Moon',
             price: 90000000,
             count: 1,
            },
            {name:'Callisto',
             price: 20000000,
             count: 1,
            },]
        
        const numberWithSepMock = jest.fn((x) => x);
        
        render(<Cart cart={cartmock} numberWithSep={numberWithSepMock}/>, {wrapper: MemoryRouter});

        const moon = screen.getByText('The Moon');
        expect(moon).toBeInTheDocument();

        const moonprice = screen.getByText('$ 90000000');
        expect(moonprice).toBeInTheDocument();
        
        const callisto = screen.getByText('Callisto');
        expect(callisto).toBeInTheDocument();

        const callistoprice = screen.getByText('$ 20000000');
        expect(callistoprice).toBeInTheDocument();

        const io = screen.queryByText('Io');
        expect(io).not.toBeInTheDocument();

        const phobos = screen.queryByText('Phobos');
        expect(phobos).not.toBeInTheDocument();
    })
})
