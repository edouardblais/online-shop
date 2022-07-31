import { MemoryRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer'
import Shop from '../Shop';

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
})
