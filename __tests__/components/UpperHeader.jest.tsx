import { UpperHeader } from '@/components';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

describe("<UpperHeader />", () => {
    const renderComponent = () => render(<UpperHeader />);

    it("should render the UpperHeader component", () => {
      renderComponent();
      const headerElement = screen.getByRole('banner');
      const appTitle = screen.getByRole('heading', { level: 1 });
      const navElement = screen.getByRole('navigation');

      expect(headerElement).toBeInTheDocument();
      expect(appTitle).toBeInTheDocument();
      expect(navElement).toBeInTheDocument();
    });

    it("should not be visible on mobile devices", () => {
      renderComponent();
      const headerElement = screen.getByRole('banner');

      expect(headerElement).toHaveClass('hidden');
    });
    
    it("should be visible on desktop devices", () => {
      renderComponent();
      const headerElement = screen.getByRole('banner');
      
      expect(headerElement).toBeInTheDocument();
      expect(headerElement).toBeVisible();
      expect(headerElement).toHaveClass('md:flex');
    });
  });
  