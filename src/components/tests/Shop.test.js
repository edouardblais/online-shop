import { MemoryRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer'
import Shop from '../Shop';
import { render, screen }from '@testing-library/react'
import userEvent from '@testing-library/user-event';

describe('Shop component', () => {
    it('renders correctly', () => {
        const shop = TestRenderer
            .create(
                <MemoryRouter>
                    <Shop />)
                </MemoryRouter>
            )
            .toJSON();
        expect(shop).toMatchSnapshot();
    })

    it('calls onChange correct amount of times', () => {
        const addAcresMock = jest.fn();
        render(<Shop addAcres={addAcresMock} />, {wrapper: MemoryRouter});
        const input = screen.getByLabelText('Number of acres desired on Callisto:');
        
        userEvent.type(input, '100');

        expect(addAcresMock).toHaveBeenCalledTimes(3);
    })

    it('does not accept strings', () => {
        const addAcresMock = jest.fn();
        render(<Shop addAcres={addAcresMock}/>, {wrapper: MemoryRouter})
        const input = screen.getByLabelText('Number of acres desired on Callisto:');

        userEvent.type(input, 'allo');
        expect(addAcresMock).not.toHaveBeenCalled();
    })

    /*it('does not accept negative numbers', () => {
        const addAcresMock = (input) => {
            if(Number(input) >= 0) {
                return
            } else {
                throw Error('Please enter a number higher than 0');
            }
        }
        render(<Shop addAcres={addAcresMock}/>, {wrapper: MemoryRouter})
        const input = screen.getByLabelText('Number of acres desired on Callisto:');

        userEvent.type(input, '-10');
        expect(addAcresMock(input)).toThrow('Please enter a number higher than 0');
    })*/

    it('renders appropriate image', () => {
        render(<Shop/>, {wrapper: MemoryRouter});
        const img = screen.getByAltText('Io');

        expect(img.src).toBe('http://localhost/io.jpg')
    })
})
