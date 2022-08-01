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
        const input = screen.getByRole('textbox', { name: 'Number of acres desired on Callisto:'});
        
        userEvent.type(input, '100');

        expect(addAcresMock).toHaveBeenCalledTimes(3);
    })

    it('renders appropriate image', () => {
        render(<Shop/>, {wrapper: MemoryRouter});
        const img = screen.getByAltText('Io');

        expect(img.src).toBe('http://localhost/io.jpg')
    })
})
