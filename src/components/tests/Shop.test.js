import { MemoryRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer'
import Shop from '../Shop';
import { render, screen }from '@testing-library/react'
import userEvent from '@testing-library/user-event';

describe('Shop component', () => {
    it('renders correctly', () => {
        const numberWithSepMock = jest.fn();
        const shop = TestRenderer
            .create(
                <MemoryRouter>
                    <Shop numberWithSep={numberWithSepMock}/>)
                </MemoryRouter>
            )
            .toJSON();
        expect(shop).toMatchSnapshot();
    })

    it('calls onChange correct amount of times', () => {
        const addAcresMock = jest.fn();
        const numberWithSepMock = jest.fn();
        render(<Shop addAcres={addAcresMock} numberWithSep={numberWithSepMock} />, {wrapper: MemoryRouter});
        const input = screen.getByLabelText('Number of acres desired on Callisto');
        
        userEvent.type(input, '100');

        expect(addAcresMock).toHaveBeenCalledTimes(3);
    })

    it('does not accept strings', () => {
        const addAcresMock = jest.fn();
        const numberWithSepMock = jest.fn();
        render(<Shop addAcres={addAcresMock} numberWithSep={numberWithSepMock}/>, {wrapper: MemoryRouter})
        const input = screen.getByLabelText('Number of acres desired on Callisto');

        userEvent.type(input, 'allo');
        expect(addAcresMock).not.toHaveBeenCalled();
    })

    it('renders appropriate image', () => {
        const numberWithSepMock = jest.fn();
        render(<Shop numberWithSep={numberWithSepMock}/>, {wrapper: MemoryRouter});
        const img = screen.getByAltText('Io');

        expect(img.src).toBe('http://localhost/io.jpg')
    })

    it('renders correct elements', () => {

        const numberWithSepMock = jest.fn((x) => x);
        
        render(<Shop numberWithSep={numberWithSepMock}/>, {wrapper: MemoryRouter});

        const moon = screen.getByText('The Moon');
        expect(moon).toBeInTheDocument();

        const planetofmoon = screen.getByText('Moon of Earth');
        expect(planetofmoon).toBeInTheDocument();
        
        const callisto = screen.getByText('Callisto');
        expect(callisto).toBeInTheDocument();

        const planetofcallisto = screen.queryAllByText('Moon of Jupiter');
        expect(planetofcallisto.length).toBe(4);

        const moonprice = screen.getByText('$ 30000000 per acre');
        expect(moonprice).toBeInTheDocument();
    })
})
