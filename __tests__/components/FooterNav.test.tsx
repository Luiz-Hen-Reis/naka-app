import { FooterNav } from '@/components';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { iconsArray } from '@/utils';

describe('<FooterNav />', () => {
    beforeEach(() => {
        render(<FooterNav />);
    })

    it("should render the FooterNav component", () => {
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();

        iconsArray.forEach(icon => {
            const iconImage = screen.getByAltText(icon.iconName);
            expect(iconImage).toBeInTheDocument();
            expect(iconImage).toHaveAttribute('src', icon.path);
      
            const iconNameText = screen.getByText(icon.iconName);
            expect(iconNameText).toBeInTheDocument();
          });
    })

    it("should render icons with correct attributes", () => {
        iconsArray.forEach(icon => {
            const iconImage = screen.getByAltText(icon.iconName);
            expect(iconImage).toBeInTheDocument();
            expect(iconImage).toHaveAttribute('src', icon.path);
      
            const iconNameText = screen.getByText(icon.iconName);
            expect(iconNameText).toBeInTheDocument();
          });
    });
})