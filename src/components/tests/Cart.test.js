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
})
