import { SearchItemsBar } from '@/components';
import { AppContextProvider } from '@/contexts/appContext';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

describe('<SearchItemsBar />', () => {
    it("should render the SearchItemsBar component", () => {
        const { getByPlaceholderText, getByText } = render(
        <AppContextProvider>
            <SearchItemsBar />
        </AppContextProvider>);

        expect(getByPlaceholderText('Buscar en el menú')).toBeInTheDocument();
        expect(getByText('Delivery')).toBeInTheDocument();
    });
})