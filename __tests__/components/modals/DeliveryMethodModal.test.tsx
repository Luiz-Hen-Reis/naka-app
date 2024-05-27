import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeliveryMethodModal from '@/components/modals/DeliveryMethodModal';
import { AppContextProvider } from '@/contexts/appContext';

describe("<DeliveryMethodModal />", () => {
    it('should render the DeliveryMethodModal component', () => {
        const { getByText } = render(
            <AppContextProvider>
                <DeliveryMethodModal />
            </AppContextProvider>
        );
        expect(getByText(/¿Cómo le gustaría recibir su pedido?/i)).toBeInTheDocument();
        expect(getByText(/Nosotros te lo llevamos/i)).toBeInTheDocument();
        expect(getByText(/Vós recoges localmente/i)).toBeInTheDocument();
        expect(getByText(/Confirmar el método de recepción/i)).toBeInTheDocument();
    });
    
})
