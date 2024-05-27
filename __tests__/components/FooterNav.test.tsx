import { FooterNav } from '@/components';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { AppContextProvider } from '@/contexts/appContext';

describe('<FooterNav />', () => {
    beforeEach(() => {
        render(
            <AppContextProvider>
                <FooterNav />
            </AppContextProvider>
        );
    })

    it("should render the FooterNav component", () => {
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();   
    });
})