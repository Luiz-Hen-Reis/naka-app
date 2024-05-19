import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeliveryMethodModal from '@/components/modals/DeliveryMethodModal';
import { AppContextProvider } from '@/contexts/appContext';

describe("<DeliveryMethodModal />", () => {
    it('should render the DeliveryMethodModal component', () => {
        const { getByText } = render(<DeliveryMethodModal />);
        expect(getByText(/¿Cómo le gustaría recibir su pedido?/i)).toBeInTheDocument();
        expect(getByText(/Nosotros te lo llevamos/i)).toBeInTheDocument();
        expect(getByText(/Vós recoges localmente/i)).toBeInTheDocument();
        expect(getByText(/Confirmar el método de recepción/i)).toBeInTheDocument();
      });
      
      it('should select option "Delivery" correctly', async () => {
        const { getByText } = render(
          <AppContextProvider>
            <DeliveryMethodModal />
          </AppContextProvider>
        );
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

        fireEvent.click(getByText('Delivery'));
        fireEvent.click(getByText('Confirmar el método de recepción'));
        await waitFor(() => {
            expect(spy).toHaveBeenCalledWith("Opção de delivery escolhida: ", "Delivery");
          });
      });
      
      it('should select option "Take Away" correctly', async () => {
        const { getByText } = render(
          <AppContextProvider>
            <DeliveryMethodModal />
          </AppContextProvider>
        );
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

        fireEvent.click(getByText('Take Away'));
        fireEvent.click(getByText('Confirmar el método de recepción'));
        await waitFor(() => {
            expect(spy).toHaveBeenCalledWith("Opção de delivery escolhida: ", "Take Away");
          });
      });
})
