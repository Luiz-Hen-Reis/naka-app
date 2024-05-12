import { MainHeader } from '@/components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

describe('<MainHeader />', () => {
    it('should render the MainHeader component', () => {
        const { queryByTestId } = render(<MainHeader />);

        const headerElement = screen.getByRole('banner');
        const titleElement = screen.getByRole('heading');
        const logoElement = screen.getByRole('img');

        expect(queryByTestId('banner')).toBeInTheDocument();
        expect(headerElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
        expect(logoElement).toBeInTheDocument();
    })
})