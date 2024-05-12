import { SearchItemsBar } from '@/components';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

describe('<SearchItemsBar />', () => {
    it("should render the SearchItemsBar component", () => {
        const { getByPlaceholderText, getByText, getByTestId } = render(<SearchItemsBar />);

        expect(getByPlaceholderText('Buscar en el menú')).toBeInTheDocument();
        expect(getByText('Delivery')).toBeInTheDocument();
        expect(getByTestId('delivery-method-button')).toBeInTheDocument();
    });
})